const bandara = [
    {
        bandara_id : 'B1',
        bandara_nama : "Soekarno Hatta",
    },
    {
        bandara_id : 'B2',
        bandara_nama : "Raden Intan",
    },
    {
        bandara_id : 'B3',
        bandara_nama : "Ngurah Rai",
    },

];

const maskapai = [
    {
        maskapai_id : 'M1',
        maskapai_nama : 'Elang'
    },
    {
        maskapai_id : 'M2',
        maskapai_nama : 'Tapis Air'
    },
    {
        maskapai_id : 'M3',
        maskapai_nama : 'Majapahit Air'
    },
];

const jadwal = [
    {
        jadwal_id : 'J1',
        berangkat_id : 'B1',
        datang_id : 'B2',
        maskapai_id : 'M1',
        tanggal : "2022-12-12"
    },
    {
        jadwal_id : 'J2',
        berangkat_id : 'B2',
        datang_id : 'B3',
        maskapai_id : 'M2',
        tanggal : "2020-12-12"
    },
    {
        jadwal_id : 'J3',
        berangkat_id : 'B3',
        datang_id : 'B1',
        maskapai_id : 'M3',
        tanggal : "2020-12-12"
    },
    {
        jadwal_id : 'J4',
        berangkat_id : 'B1',
        datang_id : 'B2',
        maskapai_id : 'M2',
        tanggal : "2022-12-12"
    },
    {
        jadwal_id : 'J5',
        berangkat_id : 'B1',
        datang_id : 'B2',
        maskapai_id : 'M3',
        tanggal : "2022-12-12" 
    },
];
export {bandara,maskapai,jadwal};