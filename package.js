Package.describe({
  summary: "SVG Icon Loader 2.0 packaged for Meteor"
});

Package.on_use(function (api) {
  api.imply('jquery');
  api.add_files('jquery.svgicons.js', 'client');
});
