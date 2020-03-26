// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I have no idea what I\'m doing but I know I\'m doing it really, really well. - Andy Dwyer',
      'I\'m not great at the advice. Can I interest you in a sarcatic comment? - Chandeler Bing', 
      'Bears. Beets. Battlestar Galactica - Jim Halpert',
      'I can be flexible, as long as everything is exactly the way I want it. - Lorelai Gilmore'
      ];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
/*
function getNameUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((name) => {
    document.getElementById('name-container').innerText = name;
  });
}
*/
function getJsonGreetings() {
  fetch('/data').then(response => response.json()).then((stats) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('array-container');
    statsListElement.innerHTML = '';
    statsListElement.appendChild(
        createListElement('Greeting 1: ' + stats.greeting1));
    statsListElement.appendChild(
        createListElement('Greeting 2: ' + stats.greeting2));
    statsListElement.appendChild(
        createListElement('Greeting 3: ' + stats.greeting3));
  });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
