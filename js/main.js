document.addEventListener("DOMContentLoaded", function () {
  mobileMenu();
  accardion();
  tab();
});
function tab() {
  let switching = true;
  const defaultOpen = "everyday";

  $(".winner__tab__item[data-place=" + defaultOpen + "]").addClass(
    "winner__tab__item--active"
  );
  $(".winner__data[data-place=" + defaultOpen + "]").fadeIn(250, function () {
    $(this).addClass("active");
    switching = false;
  });

  $(".winner__tab__item").click(function () {
    const switchToAttr = $(this).attr("data-place");
    const switchTo = $(".winner__data[data-place=" + switchToAttr + "]");
    const prevDiv = $(".winner__data.active");

    if (!switching && switchToAttr != prevDiv.attr("data-place")) {
      switching = true;

      $(".winner__tab__item.winner__tab__item--active").removeClass(
        "winner__tab__item--active"
      );
      prevDiv.removeClass("active");

      $(this).addClass("winner__tab__item--active");
      switchTo.addClass("active");

      prevDiv.fadeOut(250, function () {
        switchTo.fadeIn(250);
        switching = false;
      });
    }
  });
}
function accardion() {
  const accardions = document.querySelectorAll(".feedback__accardion");
  accardions.forEach((accardion) => {
    accardion.addEventListener("click", function () {
      this.classList.toggle("feedback__accardion--active");
      const content = this.childNodes[3];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

function mobileMenu() {
  $(".hamburger").click(function () {
    $(".mobile__menu").toggleClass("open");

    if ($(".mobile__menu").hasClass("open")) {
      $(".mobile__menu__list").show(400);
    }else {
        $(".mobile__menu__list").hide(400);
    }
  });
}
