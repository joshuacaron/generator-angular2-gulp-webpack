'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('Angular2GulpWebpack') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'title',
        message: 'Project title',
        default: 'app'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        store: true
      }
    ];

    this.prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {title: this.props.title, author: this.props.author}
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('_server.js'),
        this.destinationPath('server.js')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copyTpl(
        this.templatePath('src/_index.html'),
        this.destinationPath('src/index.html'),
        {title: this.props.title}
      );
      this.fs.copy(
        this.templatePath('src/css/_main.css'),
        this.destinationPath('src/css/main.css')
      );
      this.fs.copy(
        this.templatePath('src/_tsconfig.json'),
        this.destinationPath('src/tsconfig.json')
      );
      this.fs.copy(
        this.templatePath('src/app/_app.ts'),
        this.destinationPath('src/app/app.ts')
      );
    },
  },

  install: function() {
    this.npmInstall();
  }
});
