## A Arte da Guerra - Sun Tzu 


**A Arte da Guerra** de Sun Tzu é um dos tratados militares mais famosos e influentes da história. Escrito no século V a.C., esta obra transcende a simples arte da guerra e oferece lições valiosas sobre estratégia, liderança e tática que podem ser aplicadas tanto em conflitos militares quanto em negócios, política e vida pessoal. Aqui estão alguns dos conceitos centrais do livro:

1. **Conhecimento de Si e do Inimigo** - Uma das citações mais famosas do livro é: "Se você conhece o inimigo e conhece a si mesmo, não precisa temer o resultado de cem batalhas." Este ensinamento enfatiza a importância do autoconhecimento e do entendimento profundo do adversário.

2. **Arte de Manobrar** - Sun Tzu fala sobre a importância da flexibilidade e da adaptação às circunstâncias. Ele sugere que a melhor vitória é conquistada sem lutar, através de estratégias que desmoralizam ou isolam o inimigo.

3. **Uso da Espionagem** - Sun Tzu valoriza a inteligência e a espionagem como ferramentas essenciais para antecipar os movimentos do inimigo e planejar estratégias eficazes.

4. **Engano e Surpresa** - Ele ensina que a guerra é baseada no engano, onde a surpresa e a dissimulação são táticas chave para a vitória.

5. **Economia de Forças** - A eficiência no uso dos recursos é crucial. Não se deve desperdiçar forças em batalhas desnecessárias; em vez disso, deve-se atacar pontos fracos e evitar os fortes.

6. **Liderança** - Sun Tzu discute a importância de um líder ser sábio, sincero, benevolente, corajoso e estrito, mas não cruel. A liderança deve inspirar confiança e disciplina.

7. **Terreno** - Ele enfatiza como o conhecimento do terreno pode determinar o sucesso de uma campanha. Diferentes tipos de terreno exigem diferentes táticas.

8. **Moral das Tropas** - A importância do moral e da disciplina entre os soldados é discutida extensivamente. Um exército desmoralizado não pode vencer.

**A Arte da Guerra** continua a ser estudado mundialmente não apenas por militares, mas por qualquer um que se interesse por estratégia. Seus ensinamentos são frequentemente aplicados em contextos modernos, demonstrando a universalidade e a atemporalidade de suas ideias sobre conflito e competição.



---

Demo: [**SUN TZU CAST**](https://suntzucast.netlify.app/)

---

## FROM: @Astropod | Free and Open Source Serverless Podcast

![Atropod](https://github.com/manuelernestog/manuelernestog/assets/53962116/3106bf65-37f9-427f-9b50-72d7ae22752f)

Astropod is a free and open-source self-hosting serverless podcast solution. It supports diverse deployment services and audio hosting options and includes a customizable website deployable in a few clicks, with a personalized domain and a user-friendly CMS for effortless podcast management.

---

## Demo and Tutorial

View a live demo and a tutorial step by step of how deploy and configure your podcast with Astropod.

👉️ <https://getastropod.netlify.app>

---

## Quick deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)][deploy]

- Click the Deploy button to copy this project to your own GitHub or GitLab account and deploy your podcast with Netlify in minutes. ✨

- Once you’ve got the project set up, you do need to
[activate Netlify Identity in the Netlify UI][identity], the
[“Git Gateway”][gateway] to allow e-mail/password authentication and you are ready to go.

---

## Deployment Services

Astropod is build in the top of [Astro](https://astro.build/) framework and is ready to be deployed in the deployments services like GitHub Pages, Netlify, Vercel, Cloudflare, AWS and much more.

The configuration for the deployment varies depending on the platform where you are going to do it. See the [official Astro information](https://docs.astro.build/en/guides/deploy/) to deploy your website.

## File storage

Astropod is designed to work with any file storage solution.

You can host your podcast files in your own code base inside the folder `public/audio` and this will automatically work with [git LFS](https://git-lfs.com/) but free plans in GitHub and GitLab for LFS are limited so take that in mind.

You can also host your podcast files in any other cloud storage solution like DropBox, Google Drive, Cloudinary or on your own server. Once you upload your audio file you just need to copy the public URL of the audio file into your episode `AudioUrl` field.

For free unlimited cloud file storage we recommend use [Internet Archive](https://archive.org/).

## Content Management System

Astropod is designed in such a way that you can use it directly from the source code by editing the configuration files found in the `/.astropod` folder and modifying the episode markdown files contained in the folder `/src/content/episode`.

In order to manage podcast in a simpler way, astropod is configured by default with the CMS Serverless [Decap](https://decapcms.org/) which allows collaborative work, authentication with email or other providers and simple management.

For the easiest use of Decap we recommend deploying Astropod on Netlify since the authentication system is integrated into the platform and is configured natively. If you would like to facilitate your own OAuth authentication rather than use Netlify's service or a client side flow like implicit or PKCE, you can use one of this [community-maintained projects](https://decapcms.org/docs/external-oauth-clients/).

The fact that Astropod comes configured by default with Decap does not mean that it is the only CMS with which it can work, if you prefer to use another CMS like Sanity, Wordpress, Strapi, Tina, or any other you can follow [Astro's integration guides](https://docs.astro.build/en/guides/cms/) to your integrate your favorite CMS.

## Tech Stack

- [Astro](https://astro.build)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Requirements

- Node 16.16.0 or higher

## Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                             |
| :----------------- | :------------------------------------------------- |
| `pnpm install`     | Installs dependencies                              |
| `pnpm run dev`     | Starts local dev & Netlify CMS proxy servers       |
| `pnpm run build`   | Build your production site to `./dist/`            |
| `pnpm run preview` | Serve `./dist/` & run the Netlify CMS proxy server |

> These commands are using [`pnpm`][pnpm], but you can choose to use `npm` or `yarn` instead if you prefer.

## Project Structure

```txt
├── src/
│   ├── components/         // UI components
│   ├── content/  
│   │   ├── episode/        // Podcast episodes folder
│   ├── layouts/            // UI Layouts
│   ├── helpers/            // App helpers like static data or functions
│   └── pages/
│   │   ├── rss.xml.js/     // Feed RSS generation file
├── public/                 // Public folder dor media files
│   ├── audio/              // Git LFS folder for audio storage
├── .astropod/              // Astropod config files folder
├── astro.config.mjs        // Astro config file
├── decap.config.mjs        // Decap CMS config file
```

## Contributing

Suggestions and pull requests are welcomed! Feel free to open a discussion or an issue for a new feature request or bug.

One of the best ways of contribute is to grab a [bug report or feature suggestion](https://github.com/manuelernestog/astropod/issues) that has been marked `accepted` and dig in.

Please be wary of working on issues _not_ marked as `accepted`. Just because someone has created an issue doesn't mean we'll accept a pull request for it.

## License

Astropod is licensed under the MIT license — see the [LICENSE](https://github.com/manuelernestog/astropod/blob/main/LICENSE) file for details.

## Contributors

[![Manuel Ernestog](https://contrib.rocks/image?repo=manuelernestog/astropod)](https://github.com/manuelernestog/astropod/graphs/contributors)

Made with [contrib.rocks](https://contrib.rocks).

[deploy]: https://app.netlify.com/start/deploy?repository=https://github.com/manuelernestog/astropod
[identity]: https://docs.netlify.com/visitor-access/identity/
[gateway]: https://docs.netlify.com/visitor-access/git-gateway/
[pnpm]: https://pnpm.io/
