function volume_sphere() {
    //Write your code here
	 const radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Set the calculated volume as the value of the volume field
  document.getElementById("volume").value = volume.toFixed(2);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
