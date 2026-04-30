const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run () {
    core.notice('This is a Test Message for JS Action')
}

run();