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

function getNameUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((name) => {
    document.getElementById('name-container').innerText = name;
  });
}

function getJsonGreetings() {
  fetch('/data').then(response => response.json()).then((comments) => {
    const commentsListElement = document.getElementById('array-container');
    comments.forEach((comments) => {
      commentsListElement.appendChild(createTaskElement(comments));
    })
  });
}

function loadComments() {
  fetch('/data').then(response => response.json()).then((comments) => {
    const commentListElement = document.getElementById('comment-list');
    comments.forEach((comment) => {
      commentListElement.appendChild(createCommentElement(comment));
    })
  });
}

function createCommentElement(comment) {
  const commentElement = document.createElement('li');
  commentElement.className = 'comment';

  const titleElement = document.createElement('span');
  titleElement.innerText = comment;

  commentElement.appendChild(titleElement);
  return commentElement;
}

function requestTranslation() {
        const title = document.getElementById('title').value;
        const languageCode = document.getElementById('language').value;

        const resultContainer = document.getElementById('result');
        resultContainer.innerText = 'Loading...';

        const params = new URLSearchParams();
        params.append('title', title);
        params.append('languageCode', languageCode);

        fetch('/data', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
      }

var scu = {lat: 37.3496, lng: -121.9390};
var cv = {lat: 37.6955, lng: -122.0739};
var dis = {lat: 33.812511, lng: -117.918976};
var ghi = {lat: 37.8059, lng: -122.4226};
var favPlaces = [scu, cv, dis, ghi];
var titles = ["Santa Clara Univerity", "Castro Valley", "Disneyland", "Ghiradelli Square"];
var markers = [];
var contents = [
    "I am currently in my third year at Santa Clara University. One of my favorite things to do here is taking long walks around campus with my friends.", 
    "My hometown is Castro Valley.", 
    "One of my fondest memories is going to Disneyland with my best friend as a high school graduation celebration.",
    "My family has a tradition of going ice skating and then going to Ghiradelli Square for ice cream after every December."
]
var infoWindows = [];
var map;

function createMap() {
    map = new google.maps.Map(
      document.getElementById('map'), {
        center: {lat: 35.7540055, lng: -119.996438}, 
        zoom: 6,
        styles: [
        {
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#1d2c4d"
            }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8ec3b9"
            }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#1a3646"
            }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#4b6878"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#64779e"
            }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#4b6878"
            }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#334e87"
            }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#023e58"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#283d6a"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#6f9ba5"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#1d2c4d"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#023e58"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#3C7680"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#304a7d"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#98a5be"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#1d2c4d"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#2c6675"
            }
            ]
        },
        { 
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#255763"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#b0d5ce"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#023e58"
            }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#98a5be"
            }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#1d2c4d"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#283d6a"
            }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#3a4762"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#0e1626"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            { 
                "color": "#4e6d70"
            }
            ]
        }
        ]    
    });
}

function drop() {
    clearMarkers();
    for (var i = 0; i < favPlaces.length; i++) {
        addMarkerWithTimeout(favPlaces[i], titles[i], contents[i], i, i * 200);
    }
}

function addMarkerWithTimeout(position, title, content, index, timeout) {
    window.setTimeout(function() {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        icon:{url: "http://labs.google.com/ridefinder/images/mm_20_white.png"},
        title: title
        }));
        infoWindows.push(new google.maps.InfoWindow({content: content}));
        markers[index].addListener('click', () => {
            infoWindows[index].open(map, markers[index]);
        });
    }, timeout);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}