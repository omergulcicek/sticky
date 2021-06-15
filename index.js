const stickyHelper = function (options) {
  const defaultObj = {
    className: "sticky",
    hidden: false
  }

  const { breakpoint, id, scrollPosition, className, hidden } = Object.assign(defaultObj, options)

  const f = function () {
    let ls = 0;
    const acn = className;

    document.addEventListener("scroll", () => {
      if (hidden) {
        const e = document.getElementById(id)
        const cs = window.pageYOffset
        if (cs <= scrollPosition) { e.classList.remove(acn); return }
        cs > ls ? e.classList.remove(acn) : e.classList.add(acn)
        ls = cs
      }
      else {
        const e = document.getElementById(id).classList
        window.pageYOffset < scrollPosition ? e.remove(className) : e.add(className)
      }
    })
  }
  
  switch (breakpoint[0].toLowerCase()) {
    case "m":
      if(window.outerWidth > -1 && window.outerWidth < 768) {
        f();
      }; break;

    case "t":
      if(window.outerWidth >= 768 && window.outerWidth < 1200) {
        f();
      }; break;

    case "d":
      if(window.outerWidth >= 1200) {
        f();
      }; break;
  
    default:
      break;
  }
}
