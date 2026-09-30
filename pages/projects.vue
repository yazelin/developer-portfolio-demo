<template>
  <main class="flex flex-col flex-auto lg:flex-row overflow-hidden">

    <div id="mobile-page-title">
      <h2>_作品</h2>
    </div>

    <!-- section title (mobile) -->
    <div id="section-content-title" class="flex lg:hidden" @click="showFilters = !showFilters">
      <img :class="showFilters ? 'section-arrow rotate-90' : 'section-arrow'" :src="$asset('icons/arrow.svg')" alt="">
      <span class="font-fira_regular text-white text-sm">類型篩選</span>
    </div>

    <div v-if="showFilters" id="filter-menu" class="w-full flex-col border-right font-fira_regular text-menu-text lg:flex">
      <!-- title -->
      <div id="section-content-title" class="hidden lg:flex items-center min-w-full">
        <img id="section-arrow-menu" :src="$asset('icons/arrow.svg')" alt="" class="section-arrow mx-3 rotate-90">
        <p class="font-fira_regular text-white text-sm">類型篩選</p>
      </div>

      <!-- filter menu -->
      <nav id="filters" class="w-full flex-col">
        <div v-for="tech in techs" :key="tech" class="flex items-center py-2">
          <input type="checkbox" :id="'tech-' + tech" :checked="filters.includes(tech)" @change="toggle(tech)">
          <label :for="'tech-' + tech" class="ml-3 hover:cursor-pointer" :class="{ 'text-white': filters.includes(tech) }">{{ tech }}</label>
        </div>
      </nav>
    </div>

    <!-- content -->
    <div class="flex flex-col w-full overflow-hidden">

      <!-- windows tab -->
      <div class="tab-height w-full hidden lg:flex border-bot items-center">
        <div class="flex items-center border-right h-full">
          <p class="font-fira_regular text-menu-text text-sm px-3">{{ filters.length ? filters.join('; ') : '全部' }}</p>
          <img :src="$asset('icons/close.svg')" alt="清除篩選" title="清除篩選" class="m-3 hover:cursor-pointer" @click="filters = []">
        </div>
      </div>

      <!-- windows tab mobile -->
      <div id="tab" class="flex lg:hidden items-center">
        <span class="text-white"> // </span>
        <p class="font-fira_regular text-white text-sm px-3">作品</p>
        <span class="text-menu-text"> / </span>
        <p class="font-fira_regular text-menu-text text-sm px-3">{{ filters.length ? filters.join('; ') : '全部' }}</p>
      </div>

      <!-- projects -->
      <div id="projects-case" class="grid grid-cols-1 lg:grid-cols-2 max-w-full h-full overflow-scroll lg:self-center">
        <project-card v-for="(project, index) in projects" :key="project.url" :index="index" :project="project" />

        <!-- tools -->
        <section v-if="!filters.length" id="tools" class="col-span-full font-fira_retina">
          <h3 class="text-white text-sm mb-4">// 小工具（{{ config.tools.length }} 個）</h3>
          <div class="tools-grid">
            <a v-for="tool in config.tools" :key="tool.url" :href="tool.url" target="_blank" rel="noopener" class="tool-link">
              <img :src="$asset('icons/link.svg')" alt="" class="w-4 h-4 mr-3">
              <span>{{ tool.title }}</span>
            </a>
          </div>
        </section>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DevConfig from '~/developer.json';

const config = DevConfig
const techs = [...new Set(config.projects.flatMap(p => p.tech))]
const filters = ref([])
const showFilters = ref(true)
// 手機上預設收起篩選，作品卡直接出現在最上面
onMounted(() => { if (window.innerWidth < 1024) showFilters.value = false })

const projects = computed(() => filters.value.length
  ? config.projects.filter(p => p.tech.some(t => filters.value.includes(t)))
  : config.projects)

function toggle(tech) {
  filters.value = filters.value.includes(tech)
    ? filters.value.filter(t => t !== tech)
    : [...filters.value, tech]
}
</script>

<style>
#tools { padding: 30px 5px 10px; border-top: 1px solid #1E2D3D; margin-top: 20px; }
.tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.25rem 1.5rem; }
.tool-link { display: flex; align-items: center; padding: 0.5rem 0; color: #607B96; font-size: 14px; }
.tool-link:hover { color: white; }

#filters {
  padding: 10px 25px;
}

#tab {
  padding: 25px 25px 5px;
  flex-wrap: wrap;
}

.tech-icon {
  opacity: 0.4;
}

.tech-icon.active {
  opacity: 1;
}

#title-tech.active {
  color: white;
}

#view-button {
  background-color: #1C2B3A;
}

#view-button:hover {
  background-color: #263B50;
}

input[type="checkbox"] {
  appearance: none;
  background-color: transparent;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid currentColor;
  border-radius: 0.15em;
  margin-top: 1px;
}

input[type="checkbox"]:checked {
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}

input[type="checkbox"]:checked:hover {
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:not(:checked) {
  border-color: currentColor;
}

input[type="checkbox"]:hover {
  cursor: pointer;
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:hover:not(:checked) {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: none;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  #projects-case {
    padding: 0px 25px 40px;
  }

}

@media (min-width: 768px) {
  #projects-case {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 50px 50px 40px;
  }
}

@media (min-width: 1350px) {
  #projects-case {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 50px 80px 40px;
    /* padding: 100px 100px 40px; */
  }
}

@keyframes animateToBottom {
  from {
    transform: translate3d(0, -200px, 0);
  }

  to {
    transform: translate3d(0, 10px, 0);
  }
}
</style>
