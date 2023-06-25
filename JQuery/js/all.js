$(function () {
  //   const person = "ming";
  //   const food = "noodle";
  //   $('[data-set="name"]').text(person);
  //   $('[data-set="food"]').text(food);

  //   const person = {
  //     name: "ming",
  //     food: "noodle",
  //   };

  //   Object.keys(person).forEach(function (key) {
  //     $(`[data-set="${key}"]`).text(person[key]);
  //   });

  // JQuery ajax
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      const result = data.results[0];
      console.log(result);
      const person = {
        // name: result.name.first + " " + result.name.last,
        name: `Mr. ${result.name.first} ${result.name.last}`,
        email: result.email,
        tel: result.phone,
        img: result.picture.large,
      };
      console.log(person);
      // 非同步, 渲染行為放在完成函式內
      Object.keys(person).forEach(function (key) {
        $(`[data-set="${key}"]`).text(person[key]);
      });
      $('[data-set="img"]').attr("src", person.img);
    },
  });

  // event listener (which event, what to do)
  $("#hideBtn").on("click", function () {
    // hide block
    $(".block").toggle();
  });

  $("#slideBtn").on("click", function () {
    // target element
    $(".block").slideToggle();
  });

  $("#classToggle").on("click", function () {
    $(".block").toggleClass("bg-purple");
  });

  //   $("#addAnimate").on("click", function () {
  //     $(".block").addClass("animate__animated animate__swing");
  //   });

  //   // block listener, remove class after swing
  //   $(".block").on("animationend", function () {
  //     $(".block").removeClass("animate__animated animate__swing");
  //   });

  $(".block").on("click", function () {
    console.log(this);
    $(this).addClass("animate__animated animate__shakeX");
  });

  // block listener, remove class after swing
  $(".block").on("animationend", function () {
    $(this).removeClass("animate__animated animate__shakeX");
  });
});
