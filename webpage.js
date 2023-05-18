function meiscat(){
    const cets = ["angrycet.jpg", "anothercet.jpg", "Cet.png", "dancincet.jpg", "happycet.jpg", "othercet.jpg", "persiancet.jpg", "scaredcet.jpg", "spycet.jpg", 
    "wierdcet.jpg"]
    const index = Math.floor(Math.random() * cets.length); 
    const picture_path = "cets/"+cets[index]
    console.log("me is cat", picture_path);
    document.getElementById('Cat').src=picture_path;
}