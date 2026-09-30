<template>
    <div id="project" class="lg:mx-5">
        <span class="flex text-sm my-3">
            <h3 class="text-purplefy font-fira_bold mr-3 flex-none">作品 {{ index + 1 }}</h3>
            <h4 class="font-fira_retina text-menu-text truncate"> // {{ project.title }}</h4>
        </span>
        <div id="project-card" class="flex flex-col">
            <div id="window">
                <div class="absolute flex flex-wrap right-3 top-3 gap-1">
                    <span v-for="tech in project.tech" :key="tech" class="tag font-fira_retina">{{ tech }}</span>
                </div>
                <img id="showcase" :src="$asset(project.img)" :alt="project.title" loading="lazy">
            </div>
            <div class="pb-8 pt-6 px-6 border-top">
                <p class="text-menu-text font-fira_retina text-sm mb-5">
                {{ project.description }}
                </p>
                <a id="view-button" :href="project.url" target="_blank" rel="noopener" class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg">
                    打開看看
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project, index } = defineProps(['project', 'index'])
</script>

<style scoped>
#project {
  min-width: 0;
  margin-bottom: 5px;
}

#project-card {
  border: 1px solid #1E2D3D;
  background-color: #011221;
  border-radius: 15px;
  max-width: 400px;
}

.tag {
  font-size: 11px;
  color: #E5E9F0;
  background: rgba(1, 22, 39, 0.85);
  border: 1px solid #1E2D3D;
  border-radius: 6px;
  padding: 1px 8px;
}

#showcase {
  width: 100%;
  aspect-ratio: 1200 / 630;
  object-fit: cover;
}

#window {
  max-height: 220px;
  position: relative;
  overflow: hidden;
}

#showcase {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

@media (max-width: 768px) {
  #project {
    min-width: 100%;
  }
}

@media (min-width: 768px) {
  #project {
    width: 100%;
    min-width: 100%;
    padding-inline: 5px;
  }
}

@media (min-width: 1350px) {
  #project {
    width: 100%;
    min-width: 100%;
    padding-inline: 20px;
  }
}

</style>