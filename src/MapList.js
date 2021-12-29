
export const MapList = {
    maps: [
        {
           mapUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            mapName: 'OpenStreetMap.Mapnik',
            mapAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          },
          {
            mapUrl: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            mapName: 'OpenStreetMap.HOT',
            mapAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          },
          {
            mapUrl: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            mapName: 'OpenTopoMap',
            mapAttribution: 'Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)'
          },
         
          {
            mapUrl: 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
            mapName: 'Stamen Watercolor',
            mapAttribution: `<p class="attribution">
              <a id="home-link" target="_top" href="../">Map tiles</a> by 
              <a target="_top" href="http://stamen.com">Stamen Design</a>, under 
              <a target="_top" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by 
              <a target="_top" href="http://openstreetmap.org">OpenStreetMap</a>, under 
              <a target="_top" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.
        </p>`
          },
          {
            mapUrl: 'http://c.tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
            mapName: 'Stamen Terrain',
            mapAttribution: `<p class="attribution">
            Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
        </p>`
          }
    ]
    
}
