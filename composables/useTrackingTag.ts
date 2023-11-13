/**
 * たびらく、デジマそれぞれ専用にGoogleタグマネージャー（GTM）のエンベッドを行う
 * @returns GTMのコンテナスニペット
 */
export const useTrackingTag = () => {
  const runtimeConfig = useRuntimeConfig()
  /** たびらく用のGTMコンテナID */
  const { pnsGtmId } = runtimeConfig.public.tracking

  const insertTracking = () => {
    useHead({
      /** head内へエンベッドするタグ */
      script: [
        {
          hid: 'gtmHead',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${pnsGtmId}');`,
          // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
          tagPosition: 'head',
        },
      ],
      /** bodyの上部位置へエンベッドするタグ */
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${pnsGtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen',
        },
      ],
    })
  }

  return {
    insertTracking,
  }
}