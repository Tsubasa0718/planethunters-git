'use strict';
// facebook
document.addEventListener('DOMContentLoaded', function() {
    const fbButton = document.createElement('div');
    fbButton.className = 'fb-like';
    fbButton.setAttribute('data-href', 'https://yourwebsite.com');
    fbButton.setAttribute('data-width', '');
    fbButton.setAttribute('data-layout', 'standard');
    fbButton.setAttribute('data-action', 'like');
    fbButton.setAttribute('data-size', 'small');
    fbButton.setAttribute('data-share', 'true');
    document.getElementById('facebook-like').appendChild(fbButton);
  });
  
// x
document.addEventListener('DOMContentLoaded', function() {
    const twitterButton = document.createElement('a');
    twitterButton.href = 'https://twitter.com/share';
    twitterButton.className = 'twitter-share-button';
    twitterButton.setAttribute('data-url', 'https://yourwebsite.com');
    twitterButton.setAttribute('data-text', 'Check this out!');
    twitterButton.setAttribute('data-via', 'yourtwitterhandle');
    twitterButton.setAttribute('data-hashtags', 'example,hashtag');
    document.getElementById('x-like').appendChild(twitterButton);
  });
  
// LINE
document.addEventListener('DOMContentLoaded', function() {
    const lineButton = document.createElement('a');
    lineButton.href = 'https://social-plugins.line.me/lineit/share?url=https://yourwebsite.com';
    lineButton.className = 'line-it-button';
    lineButton.setAttribute('data-lang', 'en');
    lineButton.setAttribute('data-type', 'share-a');
    lineButton.setAttribute('data-ver', '3');
    lineButton.setAttribute('data-url', 'https://yourwebsite.com');
    lineButton.setAttribute('data-color', 'default');
    lineButton.setAttribute('data-size', 'small');
    lineButton.setAttribute('data-count', 'false');
    document.getElementById('line-like').appendChild(lineButton);
  });
  