/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
!(function (t, e, n) {
  (t.yektanetAnalyticsObject = n),
    (t[n] =
      t[n] ||
      function () {
        t[n].q.push(arguments);
      }),
    (t[n].q = t[n].q || []);
  const { script, version, firstscript } = setup();
  createScript(script, version, firstscript);
  /**
   * setup script and add it before first script in site
   * @param {node} script yekanet script
   * @param {string} version yektanet version
   * @param {node} firstscript node of first script in side
   */
  function createScript(script, version, firstscript) {
    script.id = "ua-script-{ID}";
    script.dataset.analyticsobject = n;
    script.async = 1;
    script.type = "text/javascript";
    script.src =
      "https://cdn.yektanet.com/rg_woebegone/scripts_v3/{ID}/rg.complete.js?v=" +
      version;
    firstscript.parentNode.insertBefore(script, firstscript);
  }
  /**
   * setup
   * create verion , script and node of first script
   * @returns {object}
   */
  function setup() {
    const date = new Date();
    const version = `${date
      .getFullYear()
      .toString()}0${date.getMonth()}0${date.getDate()}0${date.getHours()}`;
    const firstscript = e.getElementsByTagName("script")[0];
    const script = e.createElement("script");
    return { script, version, firstscript };
  }
})(window, document, "yektanet");
