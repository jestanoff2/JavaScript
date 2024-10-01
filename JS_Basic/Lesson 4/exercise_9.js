function Aquarium(Cemtemeters, width, height,) {
    let volume = Cemtemeters * width * height;
    let withInLeters = volume * 0.001;
    let nedeedLeters = withInLeters * (1 - 0.17);
    console.log(nedeedLeters);
}
Aquarium(85, 75, 47, 17)