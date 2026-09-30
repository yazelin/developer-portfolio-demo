<template>
    <main id="contact-me" class="page">

        <div id="mobile-page-title">
            <h2>_聯絡</h2>
        </div>

        <div id="page-menu" class="w-full h-full hidden lg:flex flex-col border-right">
            <div id="contacts" class="submenu">
                <div class="title">
                    <img class="arrow" :src="$asset('icons/arrow.svg')" alt="" style="transform: rotate(90deg)">
                    <h3>找我的地方</h3>
                </div>
                <div id="links">
                    <div v-for="(source, key) in contact.direct.sources" :key="key" class="link">
                        <img :src="$asset('icons/link.svg')" alt="">
                        <a :href="source.url" target="_blank" rel="noopener" class="font-fira_retina text-menu-text hover:text-white">{{ source.title }}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col w-full">
            <!-- windows tab -->
            <div class="tab-height w-full hidden lg:flex border-right border-bot items-center">
                <div class="flex items-center border-right h-full">
                    <p class="font-fira_regular text-menu-text text-sm px-3">contacts.js</p>
                    <img :src="$asset('icons/close.svg')" alt="" class="m-3">
                </div>
            </div>

            <div class="form-content font-fira_retina text-menu-text">
                <p class="mb-6">// 這個網站沒有聯絡表單，想找我請直接點下面的連結。</p>
                <p class="mb-6">// 每週三晚上八點，我在 LINE 社群直播。</p>
                <p><span class="kw">const</span> <span class="var">找我</span> = {</p>
                <p v-for="(source, key) in contact.direct.sources" :key="key" class="code-line">
                    <span class="var">{{ key }}</span>:
                    <a :href="source.url" target="_blank" rel="noopener" class="str">"{{ source.url }}"</a>,
                    <span class="cmt">// {{ source.title }}</span>
                </p>
                <p>}</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import DevConfig from '~/developer.json';
const contact = DevConfig.contacts
</script>

<style>

.arrow {
    transition: 0.1s;
    margin-right: 10px;
    width: 9px;
    height: 9px;
}

.submenu {
    display: flex;
    flex-direction: column;
}

.submenu .title h3 {
    @apply font-fira_regular;
    color: white;
    font-size: 16px;
}

.link {
    display: flex;
    align-items: center;
    padding: 4px 25px;
}

.link img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

#links {
    padding: 10px 0px;
}

.kw { color: #C98BDF; }
.var { color: #43D9AD; }
.str { color: #FEA55F; text-decoration: underline; text-underline-offset: 3px; word-break: break-all; }
.str:hover { color: white; }
.cmt { color: #607B96; }
.code-line { padding-left: 1.5rem; margin: 0.4rem 0; }

.form-content {
    padding: 30px 25px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    font-size: 15px;
}
@media (min-width: 1024px) {
    .form-content { padding: 75px 50px 0px 75px; }
    #page-menu { max-width: 300px; }
    .submenu .title {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #1E2D3D;
        padding: 0px 25px;
        height: 35px;
        padding: 0px 25px;
    }
    .submenu .title:hover {
        cursor: pointer;
    }
    .submenu .title h3 {
        font-size: 14px;
    }
}

</style>