import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Separator } from "./ui/separator";

// Fix Leaflet marker issue
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = defaultIcon;

const locations = [
  { name: "Defence", coords: [24.8138, 67.0653] },
  { name: "Baloch Colony", coords: [24.8665, 67.0666] },
  { name: "Gulshan-e-Iqbal", coords: [24.9263, 67.0845] },
  { name: "Clifton", coords: [24.8156, 67.0305] },
  { name: "Bahadurabad", coords: [24.8826, 67.0728] },
];

const AreasWeServe = () => {
  return (
    <section id="areas" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Areas We Serve
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We proudly provide fast, reliable services across Karachi.  
            Explore our coverage below.
          </p>
<div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-sm">
<div className="flex items-center justify-center gap-3 flex-wrap sm:flex-nowrap">
  <div>Defence</div>
  <Separator orientation="vertical" className="hidden sm:block h-5 w-px bg-gray-300" />
  <Separator className="sm:hidden w-full my-2 bg-gray-300" />

  <div>Clifton</div>
  <Separator orientation="vertical" className="hidden sm:block h-5 w-px bg-gray-300" />
  <Separator className="sm:hidden w-full my-2 bg-gray-300" />

  <div>Baloch Colony</div>
  <Separator orientation="vertical" className="hidden sm:block h-5 w-px bg-gray-300" />
  <Separator className="sm:hidden w-full my-2 bg-gray-300" />

  <div>Bahadurabad</div>
  <Separator orientation="vertical" className="hidden sm:block h-5 w-px bg-gray-300" />
  <Separator className="sm:hidden w-full my-2 bg-gray-300" />

  <div>Gulshan E Iqbal</div>
</div>

</div>
</div>


        {/* Layout: Map + List */}
        <div className="">
          {/* Map Box */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[450px]">
            <MapContainer
              center={[24.8607, 67.0011]}
              zoom={11}
              style={{ height: "100%", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              />
              {locations.map((loc, index) => (
                <Marker key={index} position={loc.coords}>
                  <Popup>{loc.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Places List with clean dividers */}
        

        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
