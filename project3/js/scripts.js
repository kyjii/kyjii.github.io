function initMap() {
  const centerCoords = { lat: 41.881832, lng: -87.623177 }; // Chicago downtown
  const mapOptions = {
    center: centerCoords,
    zoom: 13,
    mapTypeId: 'roadmap',
    streetViewControl: false
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const spots = [
    { position: { lat: 41.8827, lng: -87.6275 }, label: 'Millennium Park', infoText: 'Famous park in downtown Chicago.' },
    { position: { lat: 41.8917, lng: -87.6078 }, label: 'Navy Pier', infoText: 'Popular lakefront entertainment area.' },
    { position: { lat: 41.8885, lng: -87.6354 }, label: 'Art Institute of Chicago', infoText: 'World-renowned art museum.' }
  ];

  spots.forEach(spot => {
    const marker = new google.maps.Marker({
      position: spot.position,
      map: map,
      title: spot.label
    });

    const info = new google.maps.InfoWindow({
      content: `<h3>${spot.label}</h3><p>${spot.infoText}</p>`
    });

    marker.addListener('click', () => info.open(map, marker));
  });

  const dragMarker = new google.maps.Marker({
    position: centerCoords,
    map: map,
    title: 'Drag me!',
    draggable: true,
    animation: google.maps.Animation.DROP
  });

  dragMarker.addListener('dragend', () => {
    const pos = dragMarker.getPosition();
    alert(`Marker dropped at: ${pos.lat().toFixed(5)}, ${pos.lng().toFixed(5)}`);
  });

  document.getElementById('questionButton').addEventListener('click', () => {
    alert('If you have any questions, contact me at:\nkhu1@cps.edu');
  });
}