<script setup>
import {ref, onMounted, nextTick} from 'vue';
import { Textarea } from '@/components/ui/textarea';


const mytext = ref('Welcome to Parkk Docs, my home for all things learning. Come along with me as I journey through a career in computer science. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus tortor, efficitur nec turpis in, feugiat faucibus augue. Duis bibendum aliquam dictum. Nulla sed risus condimentum, luctus libero a, consequat felis. Morbi ut tempus dolor, vitae facilisis mauris. Donec pellentesque lectus et arcu volutpat viverra. Nulla dictum pretium leo nec sodales. Aliquam porta massa sed metus tincidunt, at venenatis libero finibus. Nam condimentum commodo erat. Nullam consectetur diam ligula, id vulputate felis porta eget. Aliquam sit amet justo a nulla faucibus sollicitudin rutrum quis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec cursus nulla tempus massa interdum suscipit. Vestibulum imperdiet nunc dui. Cras nec nibh vel nunc facilisis ultrices. Ut vulputate urna varius iaculis tincidunt. Mauris sagittis, nunc a consequat gravida, ligula dui pretium tortor, sed ultricies sem libero convallis orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus, felis ac scelerisque mattis, dui sem faucibus ante, vitae consequat dui massa sed metus. Etiam ultricies, nisi eu rhoncus congue, augue mi dignissim turpis, ut eleifend turpis arcu eu urna. Cras id tincidunt dolor, eu volutpat turpis. Cras ut est sed ante porttitor venenatis vel eu risus. Proin ullamcorper diam sem, in mattis mauris rhoncus vitae. Etiam at eros ex. Ut congue commodo orci sed eleifend. Sed consectetur ullamcorper malesuada. Proin at tincidunt lectus. Praesent euismod odio sem, eget egestas eros faucibus vitae. Proin sed nibh in metus bibendum aliquam ac vel sem. Morbi neque felis, rutrum vitae interdum sit amet, ultricies vitae felis. Pellentesque sit amet tellus et ex eleifend vestibulum. Nullam enim elit, viverra nec ante et, elementum bibendum odio. Nullam vehicula non nisi sit amet fermentum. Donec quis scelerisque nisl, at pulvinar nisi. Donec euismod lectus vel mauris rutrum, ac laoreet mauris egestas. Nullam molestie ipsum non urna interdum, in auctor mauris blandit. Nulla ac iaculis orci. Nulla lacinia consectetur purus, vitae tempus mauris tincidunt vitae. Integer in elit erat. Phasellus rutrum dolor vel nisl luctus feugiat. Pellentesque congue, felis tristique fringilla placerat, sem purus dictum diam, sed tempor nunc lectus quis risus. Integer semper nec mauris facilisis ullamcorper. Aenean imperdiet lobortis urna id malesuada. Morbi semper malesuada tortor, sed maximus massa pellentesque vel. Curabitur tempor scelerisque venenatis. Nulla vitae enim tincidunt mauris semper finibus in ut massa. Praesent viverra ut nulla aliquet aliquet. Ut lacinia congue lorem vitae bibendum. Proin id aliquet magna. Donec dignissim, sem sed venenatis bibendum, nulla sem dignissim ex, id vulputate mauris felis ornare felis.')
const mytextarea = ref(null)

function autoResize(){
  const el = mytextarea.value?.$el?.querySelector('textarea');
  if (!el) return
  el.style.height = 'auto'      
  el.style.height = el.scrollHeight + 'px'
}

onMounted(() => {
    nextTick(() => autoResize())
})

    defineProps({
        isExpanded: Boolean
    })
</script>

<template>
    <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 -translate-y-2"
    leave-to-class="opacity-0 -translate-y-2"
    @after-enter="autoResize"
  >
    <div v-if="isExpanded" class="border bg-zinc-400 p-3">
        <img src="../assets/omorigroup.jpeg" alt="">
          <Textarea
    ref="mytextarea"
    v-model="mytext"
    class="entry-text w-full bg-transparent resize-none outline-none border-none text-zinc-100"
    @input="autoResize"
  ></Textarea>
    </div>
    </Transition>
</template>

<style lang="scss" scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        img{
            max-width: 2000px;
            padding-bottom: 30px;
        }
    }
    textarea{
        height:auto;
        overflow-y: hidden;
        resize: none;
    }
</style>