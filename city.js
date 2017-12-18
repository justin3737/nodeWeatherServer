module.exports = {
    citys: [ 
        [ '基隆市', '1' ],
        [ '臺北市', '3' ],
        [ '新北市', '5' ],
        [ '桃園市', '8' ],
        [ '新竹市', '10' ],
        [ '新竹縣', '12' ],
        [ '苗栗縣', '14' ],
        [ '臺中市', '17' ],
        [ '彰化縣', '19' ],
        [ '南投縣', '21' ],
        [ '雲林縣', '24' ],
        [ '嘉義市', '26' ],
        [ '嘉義縣', '28' ],
        [ '臺南市', '31' ],
        [ '高雄市', '33' ],
        [ '屏東縣', '35' ],
        [ '宜蘭縣', '38' ],
        [ '花蓮縣', '40' ],
        [ '臺東縣', '42' ],
        [ '連江縣', '45' ],
        [ '金門縣', '47' ],
        [ '澎湖縣', '49' ] 
    ],
    getCityIdByName: function(name) {
        let _idx = -1;
        this.citys.forEach((value)=>{
            if(name === value[0])
                _idx = value[1];
        });
        return _idx;
    },
    getCityNameById: function(id) {
        let _name = "";
        this.citys.forEach((value)=>{
            if(id == value[1])
                _name = value[0];
        });
        return _name;
    },
    getAllCityIds: function() {
        let _arr = [];
        this.citys.forEach((value)=>{
            _arr.push(value[1]);
        });
        return _arr;
    },
    getAllCityNames: function() {
        let _arr = [];
        this.citys.forEach((value)=>{
            _arr.push(value[0]);
        });
        return _arr;
    }
  };