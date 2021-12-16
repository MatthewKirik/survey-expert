/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c0508b0e0f64e545084abaf932b91fc5"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.b2386f60.css",
    "revision": "49fc575b9e6f63b689058b3e99ffa849"
  },
  {
    "url": "assets/img/add-organization-success.64bddd55.png",
    "revision": "64bddd55a6c6edd8645a6c930e2b064e"
  },
  {
    "url": "assets/img/delete-organization-success.af97777d.png",
    "revision": "af97777dac6e8b0b2d3a74704304611f"
  },
  {
    "url": "assets/img/get-organization-after-delete.1dd3da9d.png",
    "revision": "1dd3da9ddddd1aab7b648ec3149ad986"
  },
  {
    "url": "assets/img/get-organization-success.a7efcf0c.png",
    "revision": "a7efcf0c1b31b9499813c7e6f6551587"
  },
  {
    "url": "assets/img/get-updated-organization-success.c17ab81d.png",
    "revision": "c17ab81d7fb781997c91bd9b62fafa09"
  },
  {
    "url": "assets/img/get-user-success.aa5bef4c.png",
    "revision": "aa5bef4c2e2d9de6574479c96c1d3a1b"
  },
  {
    "url": "assets/img/get-users-failed.9e7f61bd.png",
    "revision": "9e7f61bd26ede441e60a10ae391eda1b"
  },
  {
    "url": "assets/img/get-users-success.087ad78a.png",
    "revision": "087ad78af2527e45a898d4c2804bf50c"
  },
  {
    "url": "assets/img/login-failed.9f39cb9e.png",
    "revision": "9f39cb9e0ea54738d900f315a58bf590"
  },
  {
    "url": "assets/img/login-success.86b6515d.png",
    "revision": "86b6515d85424d7c4c0ae041402860cb"
  },
  {
    "url": "assets/img/register-success.14f3cca9.png",
    "revision": "14f3cca94101f6e3e93a02ac81c7d8c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-organization-success.66e07f53.png",
    "revision": "66e07f53e97e8bec8fbe2daf55c3a5a3"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.5dc61996.js",
    "revision": "e9db83a60469f2ce628467789317aed6"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.57c89bc9.js",
    "revision": "ea0a867f77b6bb75c20965ba2aefe6f3"
  },
  {
    "url": "assets/js/14.1b716ae9.js",
    "revision": "7dc36acb4aeb2a01407749cfeb0e68ed"
  },
  {
    "url": "assets/js/15.9f9257ae.js",
    "revision": "81a0ca54049ad60418fa83d1d957ba60"
  },
  {
    "url": "assets/js/16.0fe8f8b7.js",
    "revision": "77ca13665af0b70d1c601bc59b13f266"
  },
  {
    "url": "assets/js/17.00d92f8b.js",
    "revision": "9bb7390bbd5c4a0ecdeffd97f43707be"
  },
  {
    "url": "assets/js/18.d01581f7.js",
    "revision": "b990a861f4bb2e6b2e714201d581bde2"
  },
  {
    "url": "assets/js/19.4bfc8256.js",
    "revision": "6fc47e5195cc3d5c3198787b5bb132f1"
  },
  {
    "url": "assets/js/2.139504ec.js",
    "revision": "9f5d81778f264235ef1ff99e0ed77e85"
  },
  {
    "url": "assets/js/20.42466610.js",
    "revision": "ee1defce9ee44cf9586f7674ae518077"
  },
  {
    "url": "assets/js/21.4784da56.js",
    "revision": "75eb2916646d23d6a2f2ed28c8ccaf5c"
  },
  {
    "url": "assets/js/22.da76b759.js",
    "revision": "c5f088f063d13d748514f3b01c6412d0"
  },
  {
    "url": "assets/js/23.3b0b17d4.js",
    "revision": "c7a72f865548c1ea75d8c4ba0dc266f9"
  },
  {
    "url": "assets/js/24.3eab4c23.js",
    "revision": "41d1e3d060962f92787b679dac962993"
  },
  {
    "url": "assets/js/26.2a58e3d0.js",
    "revision": "730466dab27a3b499e639af86a681853"
  },
  {
    "url": "assets/js/3.70be83cd.js",
    "revision": "2fa46197765d8f42dc759048d6f661eb"
  },
  {
    "url": "assets/js/4.c7fe716e.js",
    "revision": "727944e61f1b7e7ac414327498c1be0c"
  },
  {
    "url": "assets/js/5.56f8d41e.js",
    "revision": "5946558363fb920222d6f3b0fa83d985"
  },
  {
    "url": "assets/js/6.80e32d60.js",
    "revision": "b92702f2d637ff84229b43384b8f7332"
  },
  {
    "url": "assets/js/7.7deb1cd8.js",
    "revision": "e05cfecb8b998ce7ed559cbfb3d31272"
  },
  {
    "url": "assets/js/8.a595371e.js",
    "revision": "01495fbb68a73fd61d9cf58424c08299"
  },
  {
    "url": "assets/js/9.91e1ad87.js",
    "revision": "5b9395e5038943e959cbbc77ceb89ea4"
  },
  {
    "url": "assets/js/app.ae5940c9.js",
    "revision": "fb4e52e4451a9cdebf55c757b976f34e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1956b5015c71dc7e665fdb23386b8603"
  },
  {
    "url": "design/index.html",
    "revision": "26136f3453133fc13eff170cea53dfc8"
  },
  {
    "url": "index.html",
    "revision": "342924741bf618c025f38e4f6aa3058d"
  },
  {
    "url": "intro/index.html",
    "revision": "d48127296794fa8830952cc75e529523"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "80b7b4e52542f577d611afa725fd74e0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8894d175a4536c80960da2f4423bd75e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "324b2e2e59e5dae219e37f0bbebe84e7"
  },
  {
    "url": "software/index.html",
    "revision": "e25a2a76e87ff35fdb10bfc83d8a22fe"
  },
  {
    "url": "test/index.html",
    "revision": "866c860fed7560d15719e0bc35c48ba5"
  },
  {
    "url": "use cases/index.html",
    "revision": "f2d502ce386c19155c8b1673c9a77756"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
