$("#colors-container");

let colors = [];

function colorCardTemplate(color) {
  return `
  <div class="colorItem" id = "${color}">
    <div class="colorIndicator" style="background:${color};"></div>
    <div class="colorValue">${color}</div>
    <div class="btn-delete" >X</div>
  </div>
    `;
}

function GenerateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function UpdateColors() {
  $("#colors").html("");

  for (const color of colors) {
    $("#colors").prepend(colorCardTemplate(color));
  }

  for (const btnDelete of $(".btn-delete")) {
    let $btnDelete = $(btnDelete);
    $btnDelete.click(() => {
      colors = colors.filter((color) => color != $btnDelete.parent()[0].id);
      $btnDelete.parent().remove();
    });
  }

  for (const colorCard of $(".colorItem")) {
    $(colorCard).click((e) => {
      e.preventDefault();
      $("#colorIndicator").css("background", colorCard.id);
      $("#colorIndicator").html(colorCard.id);
    });
  }
}

$("#btn-Generate-Color").click(() => {
  const color = GenerateRandomColor();
  $("#colorIndicator").css("background", color);
  $("#colorIndicator").html(color);
  colors.push(color);
  UpdateColors();
});
