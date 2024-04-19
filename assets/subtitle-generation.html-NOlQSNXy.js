import{_ as e,o as i,c as n,e as o}from"./app-DfF7-Uy5.js";const t={},l=o(`<h2 id="字幕生成-📜" tabindex="-1"><a class="header-anchor" href="#字幕生成-📜"><span>字幕生成 📜</span></a></h2><p>当前支持2种字幕生成方式：</p><ul><li><strong>edge</strong>: 生成<code>速度快</code>，性能更好，对电脑配置没有要求，但是质量可能不稳定</li><li><strong>whisper</strong>: 生成<code>速度慢</code>，性能较差，对电脑配置有一定要求，但是<code>质量更可靠</code>。</li></ul><p>可以修改 <code>config.toml</code> 配置文件中的 <code>subtitle_provider</code> 进行切换</p><p>建议使用 <code>edge</code> 模式，如果生成的字幕质量不好，再切换到 <code>whisper</code> 模式</p><blockquote><p>注意：</p></blockquote><ol><li>whisper 模式下需要到 HuggingFace 下载一个模型文件，大约 3GB 左右，请确保网络通畅</li><li>如果留空，表示不生成字幕。</li></ol><blockquote><p>由于国内无法访问 HuggingFace，可以使用以下方法下载 <code>whisper-large-v3</code> 的模型文件</p></blockquote><p>下载地址：</p><ul><li>百度网盘: https://pan.baidu.com/s/11h3Q6tsDtjQKTjUu3sc5cA?pwd=xjs9</li><li>夸克网盘：https://pan.quark.cn/s/3ee3d991d64b</li></ul><p>模型下载后解压，整个目录放到 <code>.\\MoneyPrinterTurbo\\models</code> 里面， 最终的文件路径应该是这样: <code>.\\MoneyPrinterTurbo\\models\\whisper-large-v3</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>MoneyPrinterTurbo  
  ├─models
  │   └─whisper-large-v3
  │          config.json
  │          model.bin
  │          preprocessor_config.json
  │          tokenizer.json
  │          vocabulary.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[l];function d(c,r){return i(),n("div",null,s)}const u=e(t,[["render",d],["__file","subtitle-generation.html.vue"]]),p=JSON.parse('{"path":"/zh/guide/subtitle-generation.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"字幕生成 📜","slug":"字幕生成-📜","link":"#字幕生成-📜","children":[]}],"git":{"updatedTime":1713507839000,"contributors":[{"name":"kevin.zhang","email":"kevin.zhang@cardinfolink.com","commits":1}]},"filePathRelative":"zh/guide/subtitle-generation.md"}');export{u as comp,p as data};
