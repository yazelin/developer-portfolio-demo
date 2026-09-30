<template>
    <footer class='flex md:justify-between border-top text-menu-text font-fira_retina'>

        <!-- social icons -->
        <div class="flex justify-start">
            <span id="social-title" class="h-full flex justify-center items-center border-right px-5">
                找我：
            </span>
            <div id="social-icons" class="flex">
                <a :href="social.facebook.url + social.facebook.user" target="_blank" rel="noopener" class="flex justify-center items-center" title="Facebook">
                    <img :src="$asset('icons/social/facebook.svg')" alt="Facebook"/>
                </a>
                <a :href="social.github.url + social.github.user" target="_blank" rel="noopener" class="flex md:hidden justify-center items-center" title="GitHub">
                    <img :src="$asset('icons/social/github.svg')" alt="GitHub"/>
                </a>
            </div>
        </div>

        <!-- credit -->
        <a id="credit" :href="credit.url" target="_blank" rel="noopener" :title="credit.text" class="flex flex-1 items-center justify-center px-4 truncate">
            <span class="md:hidden">原作出處</span>
            <span class="hidden md:inline">改自 alexdeploy/developer-portfolio-v2（MIT）</span>
        </a>

        <!-- github user -->
        <a :href="social.github.url + social.github.user" target="_blank" rel="noopener" class="hidden md:flex items-center px-5 border-left">
            @{{ social.github.user }}
            <img :src="$asset('icons/social/github.svg')" alt="GitHub"/>
        </a>

    </footer>
</template>

<script setup>
import config from '~/developer.json';

const social = ref(config.contacts.social);
const credit = config.credit;
</script>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style>

#credit { font-size: 12px; min-width: 0; }
#credit:hover { color: white; }

footer {
    height: 40px;
    min-height: 40px;
    font-size: 13px;
}

footer a:hover {
    background-color: #1e2d3d74;
}

#social-icons > a {
    border-right: 1px solid #1E2D3D;
    height: 100%;
    width: 50px;
 }

#social-icons > a > img {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    margin: auto;
    opacity: 0.4;
}

footer > a > img {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    margin-left: 0.5rem; /* 8px */
  }

#social-icons > a:hover img {
    opacity: 1;
}

@media (max-width: 768px) {

    #social-title {
        border-right: none;
    }

    #social-icons > a {
        border-right: none;
        border-left: 1px solid #1E2D3D;
    }

    #social-icons > a > img {
        width: 1.5rem; /* 20px */
        height: 1.5rem; /* 20px */
  }
}

</style>