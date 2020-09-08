(function () {
  const list = document.getElementById("list");
  const search = document.getElementById("app-search");

  let filteredSpaceCrafts = [];

  search.addEventListener("input", (e) => {
    let xs = getData().filter((item) =>
      item.spacecraft.includes(e.target.value)
    );
    filteredSpaceCrafts = [...xs];
    render(list);
  });

  const render = (list) => {
    list.innerHTML = filteredSpaceCrafts
      .map((item) => `<li> ${item.spacecraft} </li> `)
      .join("");
  };

  function getData() {
    return [
      {
        spacecraft: "Pioneer 0 (Able I)",
      },
      {
        spacecraft: "Luna E-1 No.1",
      },
      {
        spacecraft: "Pioneer 1 (Able II)",
      },
      {
        spacecraft: "Luna E-1 No.2",
      },
      {
        spacecraft: "Pioneer 2 (Able III)",
      },
      {
        spacecraft: "Luna E-1 No.3",
      },
      {
        spacecraft: "Pioneer 3",
      },
      {
        spacecraft: "Mechta (E-1 No.4)",
      },
      {
        spacecraft: "Pioneer 4",
      },
      {
        spacecraft: "E-1A No.1",
      },
      {
        spacecraft: "Luna 2 (E-1A No.2)",
      },
      {
        spacecraft: "Luna 3 (E-2A No.1)",
      },
      {
        spacecraft: "Pioneer P-3 Able IVB",
      },
      {
        spacecraft: "Luna E-3 No.1",
      },
      {
        spacecraft: "Luna E-3 No.2",
      },
      {
        spacecraft: "Pioneer P-30 (Able VA)",
      },
      {
        spacecraft: "Pioneer P-31 (Able VB)",
      },
      {
        spacecraft: "Ranger 3 (P-34)",
      },
      {
        spacecraft: "Ranger 4 (P-35)",
      },
      {
        spacecraft: "Ranger 5 (P-36)",
      },
      {
        spacecraft: "Luna E-6 No.2",
      },
      {
        spacecraft: "Luna E-6 No.3",
      },
      {
        spacecraft: "Luna 4 (E-6 No.4)",
      },
      {
        spacecraft: "Ranger 6 (P-54)",
      },
      {
        spacecraft: "Luna E-6 No.6",
      },
      {
        spacecraft: "Luna E-6 No.5",
      },
      {
        spacecraft: "Ranger 7",
      },
      {
        spacecraft: "Ranger 8",
      },
      {
        spacecraft: "Kosmos 60 (E-6 No.9)",
      },
      {
        spacecraft: "Ranger 9",
      },
      {
        spacecraft: "Luna E-6 No.8",
      },
      {
        spacecraft: "Luna 5 (E-6 No.10)",
      },
      {
        spacecraft: "Luna 6 (E-6 No.7)",
      },
      {
        spacecraft: "Zond 3 (3MV-4 No.3)",
      },
      {
        spacecraft: "Luna 7 (E-6 No.11)",
      },
      {
        spacecraft: "Luna 8 (E-6 No.12)",
      },
      {
        spacecraft: "Luna 9 (E-6 No.13)",
      },
      {
        spacecraft: "Kosmos 111 (E-6S No.204)",
      },
      {
        spacecraft: "Luna 10 (E-6S No.206)",
      },
      {
        spacecraft: "Surveyor 1",
      },
      {
        spacecraft: "Explorer 33 (AIMP-D)",
      },
      {
        spacecraft: "Lunar Orbiter 1",
      },
      {
        spacecraft: "Luna 11 (E-6LF No.101)",
      },
      {
        spacecraft: "Surveyor 2",
      },
      {
        spacecraft: "Luna 12 (E-6LF No.102)",
      },
      {
        spacecraft: "Lunar Orbiter 2",
      },
      {
        spacecraft: "Luna 13 (E-6M No.205)",
      },
      {
        spacecraft: "Lunar Orbiter 3",
      },
      {
        spacecraft: "Surveyor 3",
      },
      {
        spacecraft: "Lunar Orbiter 4",
      },
      {
        spacecraft: "Surveyor 4",
      },
      {
        spacecraft: "Explorer 35 (AIMP-E)",
      },
      {
        spacecraft: "Lunar Orbiter 5",
      },
      {
        spacecraft: "Surveyor 5",
      },
      {
        spacecraft: "Soyuz 7K-L1 No.4L",
      },
      {
        spacecraft: "Surveyor 6",
      },
      {
        spacecraft: "Soyuz 7K-L1 No.5L",
      },
      {
        spacecraft: "Surveyor 7",
      },
      {
        spacecraft: "Luna E-6LS No.112",
      },
      {
        spacecraft: "Luna 14 (E-6LS No.113)",
      },
      {
        spacecraft: "Soyuz 7K-L1 No.7L",
      },
      {
        spacecraft: "Zond 5 (7K-L1 No.9L)",
      },
      {
        spacecraft: "Zond 6 (7K-L1 No.12L)",
      },
      {
        spacecraft: "Apollo 8",
      },
      {
        spacecraft: "Soyuz 7K-L1 No.13L",
      },
      {
        spacecraft: "Luna E-8 No.201",
      },
      {
        spacecraft: "Soyuz 7K-L1S No.3",
      },
      {
        spacecraft: "Apollo 10",
      },
      {
        spacecraft: "Luna E-8-5 No.402",
      },
      {
        spacecraft: "Soyuz 7K-L1S No.5",
      },
      {
        spacecraft: "Luna 15 (E-8-5 No.401)",
      },
      {
        spacecraft: "Apollo 11",
      },
      {
        spacecraft: "Zond 7 (7K-L1 No.11L)",
      },
      {
        spacecraft: "Kosmos 300 (E-8-5 No.403)",
      },
      {
        spacecraft: "Kosmos 305 (E-8-5 No.404)",
      },
      {
        spacecraft: "Apollo 12",
      },
      {
        spacecraft: "Luna E-8-5 No.405",
      },
      {
        spacecraft: "Apollo 13",
      },
      {
        spacecraft: "Luna 16 (E-8-5 No.406)",
      },
      {
        spacecraft: "Zond 8 (7K-L1 No.14L)",
      },
      {
        spacecraft: "Luna 17 (E-8 No.203)",
      },
      {
        spacecraft: "Apollo 14",
      },
      {
        spacecraft: "Apollo 15",
      },
      {
        spacecraft: "PFS-1",
      },
      {
        spacecraft: "Luna 18 (E-8-5 No.407)",
      },
      {
        spacecraft: "Luna 19 (E-8LS No.202)",
      },
      {
        spacecraft: "Luna 20 (E-8-5 No.408)",
      },
      {
        spacecraft: "Apollo 16",
      },
      {
        spacecraft: "PFS-2",
      },
      {
        spacecraft: "Soyuz 7K-LOK No.1",
      },
      {
        spacecraft: "Apollo 17",
      },
      {
        spacecraft: "Luna 21 (E-8 No.204)",
      },
      {
        spacecraft: "Explorer 49 (RAE-B)",
      },
      {
        spacecraft: "Mariner 10 (RAE-B)",
      },
      {
        spacecraft: "Luna 22 (E-8LS No.206)",
      },
      {
        spacecraft: "Luna 23 (E-8-5M No.410)",
      },
      {
        spacecraft: "Luna E-8-5M No.412",
      },
      {
        spacecraft: "Luna 24 (E-8-5M No.413)",
      },
      {
        spacecraft: "ISEE-3 (ICE/Explorer 59)",
      },
      {
        spacecraft: "Hiten (MUSES-A)",
      },
      {
        spacecraft: "Hagoromo",
      },
      {
        spacecraft: "Geotail",
      },
      {
        spacecraft: "WIND",
      },
      {
        spacecraft: "Clementine (DSPSE)",
      },
      {
        spacecraft: "HGS-1",
      },
      {
        spacecraft: "Lunar Prospector (Discovery 3)",
      },
      {
        spacecraft: "Nozomi (PLANET-B)",
      },
      {
        spacecraft: "WMAP",
      },
      {
        spacecraft: "SMART-1",
      },
      {
        spacecraft: "STEREO A",
      },
      {
        spacecraft: "STEREO B",
      },
      {
        spacecraft: "ARTEMIS P1",
      },
      {
        spacecraft: "ARTEMIS P2",
      },
      {
        spacecraft: "SELENE (Kaguya)",
      },
      {
        spacecraft: "Okina (RSAT)",
      },
      {
        spacecraft: "Ouna (VRAD)",
      },
      {
        spacecraft: "Chang'e 1",
      },
      {
        spacecraft: "Chandrayaan-1",
      },
      {
        spacecraft: "Moon Impact Probe",
      },
      {
        spacecraft: "Lunar Reconnaissance Orbiter",
      },
      {
        spacecraft: "LCROSS",
      },
      {
        spacecraft: "Chang'e 2",
      },
      {
        spacecraft: "Ebb (GRAIL-A)",
      },
      {
        spacecraft: "Flow (GRAIL-B)",
      },
      {
        spacecraft: "LADEE",
      },
      {
        spacecraft: "Chang'e 3",
      },
      {
        spacecraft: "Yutu",
      },
      {
        spacecraft: "Chang'e 5-T1",
      },
      {
        spacecraft: "Manfred Memorial Moon Mission",
      },
      {
        spacecraft: "TESS",
      },
      {
        spacecraft: "Queqiao",
      },
      {
        spacecraft: "Longjiang-1",
      },
      {
        spacecraft: "Longjiang-2",
      },
      {
        spacecraft: "Chang'e 4",
      },
      {
        spacecraft: "Beresheet",
      },
      {
        spacecraft: "Chandrayaan-2",
      },
    ];
  }
})();
