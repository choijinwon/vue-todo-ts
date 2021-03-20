
<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">제품가공한</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <!-- <h2 class="text-center">시간당 가공갯수</h2> -->
           <lineChart  
          :chartData="arrPart_Count"
          :options="chartOptions"
          
          />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import lineChart from "../components/LineChart.vue"
export default {
  name: 'Home',
    components: {
        lineChart
    },
    data() {
      return{
        arrPart_Count: [],
        list: [
          [
            {
              "MID": "Lynx220LSY",
              "Xact": "332",
              "Zact": "414.742",
              "S1load": "69",
              "part_count": "440",
              "TIME": "2021-03-04T02:47:55.543756Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "292",
              "Zact": "402.576",
              "S1load": "107",
              "part_count": "440",
              "TIME": "2021-03-04T02:47:55.705702Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "252",
              "Zact": "390.409",
              "S1load": "32",
              "part_count": "440",
              "TIME": "2021-03-04T02:47:55.870712Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "212",
              "Zact": "378.243",
              "S1load": "10",
              "part_count": "440",
              "TIME": "2021-03-04T02:47:56.033644Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "172",
              "Zact": "366.077",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:47:56.197786Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "132",
              "Zact": "353.911",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:47:56.360796Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.964",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:47:56.523759Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.492",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:47:57.185848Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "62.392",
              "Zact": "316.601",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:05.545495Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.392",
              "Zact": "331.936",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:06.036565Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.892",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:06.201559Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "102.682",
              "Zact": "333.096",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:06.366572Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.642",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:06.529820Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "328",
              "Zact": "413.525",
              "S1load": "94",
              "part_count": "440",
              "TIME": "2021-03-04T02:48:30.435240Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "288",
              "Zact": "401.359",
              "S1load": "95",
              "part_count": "440",
              "TIME": "2021-03-04T02:48:30.598301Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "248",
              "Zact": "389.193",
              "S1load": "29",
              "part_count": "440",
              "TIME": "2021-03-04T02:48:30.761358Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "200",
              "Zact": "374.593",
              "S1load": "9",
              "part_count": "440",
              "TIME": "2021-03-04T02:48:30.925320Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "160",
              "Zact": "362.427",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:48:31.089322Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "120",
              "Zact": "350.261",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:48:31.253715Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.964",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:31.424166Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.492",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:32.079844Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.292",
              "Zact": "316.397",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:41.410956Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "59.292",
              "Zact": "318.803",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:42.073023Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.292",
              "Zact": "338.944",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:42.236936Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.892",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:42.400211Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.587",
              "Zact": "327.096",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:42.564052Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.642",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:48:42.727077Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.992",
              "Zact": "273.946",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:02.071288Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.023",
              "Zact": "278.112",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:02.724497Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.219",
              "Zact": "289.746",
              "S1load": "13",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:15.993636Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.854",
              "Zact": "289.583",
              "S1load": "7",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:16.157575Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.398",
              "Zact": "289.312",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:16.320428Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.941",
              "Zact": "289.04",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:16.483395Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.485",
              "Zact": "288.768",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:16.647407Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.773",
              "Zact": "289.255",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:16.810333Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.318",
              "Zact": "289.434",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:16.975426Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.73",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:30.259975Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.198",
              "Zact": "290.312",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:30.912517Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.585",
              "Zact": "290.708",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:31.076540Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.027",
              "Zact": "292.373",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:43.204388Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.437",
              "Zact": "291.96",
              "S1load": "9",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:43.371501Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.762",
              "Zact": "291.612",
              "S1load": "7",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:43.534578Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.087",
              "Zact": "291.264",
              "S1load": "6",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:43.697596Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.411",
              "Zact": "290.916",
              "S1load": "5",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:43.864265Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.736",
              "Zact": "290.567",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:44.027632Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.061",
              "Zact": "290.219",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:44.190634Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.385",
              "Zact": "289.871",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:44.353640Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.623",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:44.516632Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.98",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:44.681637Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.527",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:56.645310Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.446",
              "Zact": "292.918",
              "S1load": "5",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:56.810335Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.162",
              "Zact": "292.782",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:56.975268Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.761",
              "Zact": "292.545",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:57.139557Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.048",
              "Zact": "293.017",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:49:57.302375Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.605",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:49:57.465478Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "78.876",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:09.413233Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.473",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:10.070229Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.645",
              "Zact": "294.079",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:10.235196Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.867",
              "Zact": "292.946",
              "S1load": "8",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:22.220003Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.898",
              "Zact": "297.112",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:22.877144Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.239",
              "Zact": "316.726",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:23.533694Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.696",
              "Zact": "316.454",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:23.703100Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.606",
              "Zact": "316.182",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:23.866376Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.149",
              "Zact": "315.911",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:24.031238Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.692",
              "Zact": "315.64",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:24.195096Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.235",
              "Zact": "315.368",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:24.358273Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.779",
              "Zact": "315.096",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:24.522254Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.192",
              "Zact": "314.89",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:24.685481Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.323",
              "Zact": "315.455",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:24.849547Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "130.964",
              "Zact": "353.595",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:25.833523Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "178.964",
              "Zact": "368.195",
              "S1load": "63",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:25.996295Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "218.964",
              "Zact": "380.361",
              "S1load": "38",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:26.159404Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "258.964",
              "Zact": "392.527",
              "S1load": "18",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:26.323293Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "298.964",
              "Zact": "404.694",
              "S1load": "9",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:26.486340Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "338.964",
              "Zact": "416.86",
              "S1load": "5",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:26.650312Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:26.813602Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "326",
              "Zact": "412.917",
              "S1load": "72",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:27.306707Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "278",
              "Zact": "398.317",
              "S1load": "128",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:27.469644Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "238",
              "Zact": "386.151",
              "S1load": "65",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:27.634737Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "198",
              "Zact": "373.985",
              "S1load": "20",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:27.798574Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "158",
              "Zact": "361.819",
              "S1load": "6",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:27.963775Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "118",
              "Zact": "349.652",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:28.126774Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.964",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:28.290794Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "111.892",
              "Zact": "319.234",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:28.782436Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.892",
              "Zact": "317.995",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:28.945491Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.7",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:29.108586Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.897",
              "Zact": "317.34",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:29.272534Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.602",
              "Zact": "316.78",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:29.435583Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.699",
              "Zact": "316.41",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:29.598634Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.003",
              "Zact": "316.294",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:29.761525Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.82",
              "Zact": "316.229",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:29.924556Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.498",
              "Zact": "316.021",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:30.087644Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.587",
              "Zact": "315.479",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:30.252493Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.421",
              "Zact": "315.055",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:30.417956Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.797",
              "Zact": "314.705",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:30.581966Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.892",
              "Zact": "314.254",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:30.745916Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.47",
              "Zact": "292.796",
              "S1load": "5",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:35.986137Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.789",
              "Zact": "292.707",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:36.805340Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.453",
              "Zact": "292.487",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:36.975219Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.916",
              "Zact": "292.164",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:37.140028Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.477",
              "Zact": "291.562",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:37.304077Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.041",
              "Zact": "290.958",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:37.467369Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.604",
              "Zact": "290.354",
              "S1load": "5",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:37.630429Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.168",
              "Zact": "289.749",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:37.793452Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.305",
              "Zact": "289.596",
              "S1load": "7",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:37.956128Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.597",
              "Zact": "289.595",
              "S1load": "5",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:38.119169Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.374",
              "Zact": "289.508",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:38.282150Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.225",
              "Zact": "289.186",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:38.445146Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.967",
              "Zact": "288.791",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:38.608178Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.289",
              "Zact": "288.428",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:38.771196Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.342",
              "Zact": "287.922",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:38.936158Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.626",
              "Zact": "273.796",
              "S1load": "9",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:42.373745Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.522",
              "Zact": "273.933",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:42.700447Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.596",
              "Zact": "274.321",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:42.866616Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.263",
              "Zact": "274.893",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:43.030452Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.425",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:43.193491Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116.964",
              "Zact": "349.337",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:50:44.338875Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156.964",
              "Zact": "361.503",
              "S1load": "59",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:44.502904Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "196.964",
              "Zact": "373.67",
              "S1load": "63",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:44.667933Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "236.964",
              "Zact": "385.836",
              "S1load": "28",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:44.831977Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276.964",
              "Zact": "398.002",
              "S1load": "12",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:44.994513Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324.964",
              "Zact": "412.602",
              "S1load": "6",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:45.163532Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:45.326642Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "344",
              "Zact": "418.437",
              "S1load": "62",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:46.478020Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "304",
              "Zact": "407.171",
              "S1load": "68",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:46.641029Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "264",
              "Zact": "395.905",
              "S1load": "20",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:46.804038Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "248",
              "Zact": "391.398",
              "S1load": "6",
              "part_count": "440",
              "TIME": "2021-03-04T02:50:46.968226Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "332",
              "Zact": "415.057",
              "S1load": "118",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:47.121711Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "292",
              "Zact": "403.791",
              "S1load": "50",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:47.286004Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "252",
              "Zact": "392.525",
              "S1load": "15",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:47.448920Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "212",
              "Zact": "381.259",
              "S1load": "4",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:47.614003Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "172",
              "Zact": "369.992",
              "S1load": "1",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:47.777024Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "132",
              "Zact": "358.726",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:51:47.942043Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": "0",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:48.104963Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.139",
              "Zact": "289.147",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:51:49.744909Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.003",
              "Zact": "289.079",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:49.908424Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.867",
              "Zact": "289.011",
              "S1load": "5",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:50.073453Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.732",
              "Zact": "288.943",
              "S1load": "6",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:50.236915Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.596",
              "Zact": "288.875",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:51:50.400428Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.46",
              "Zact": "288.808",
              "S1load": "7",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:50.563408Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.324",
              "Zact": "288.74",
              "S1load": "8",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:50.728468Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.162",
              "Zact": "288.658",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:51:50.892476Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.026",
              "Zact": "288.59",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:51:51.057507Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.859",
              "Zact": "288.56",
              "S1load": "7",
              "part_count": "440",
              "TIME": "2021-03-04T02:51:51.220194Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "102.165",
              "Zact": "350.323",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:00.237841Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "142.165",
              "Zact": "361.589",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:00.402897Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "182.165",
              "Zact": "372.855",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:00.565835Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "222.165",
              "Zact": "384.122",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:00.729882Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "262.165",
              "Zact": "395.388",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:00.892939Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "302.165",
              "Zact": "406.654",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:01.056943Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "342.165",
              "Zact": "417.92",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:01.220013Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:01.385449Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "322",
              "Zact": "404.6",
              "S1load": "108",
              "part_count": "440",
              "TIME": "2021-03-04T02:52:04.022139Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "282",
              "Zact": "380.6",
              "S1load": "31",
              "part_count": "440",
              "TIME": "2021-03-04T02:52:04.187286Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "242",
              "Zact": "369.253",
              "S1load": "8",
              "part_count": "440",
              "TIME": "2021-03-04T02:52:04.350060Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "7.233",
              "Zact": "366.853",
              "S1load": "2",
              "part_count": "440",
              "TIME": "2021-03-04T02:52:05.661274Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "4.305",
              "Zact": "369.829",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:16.659959Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "44.305",
              "Zact": "375.585",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:16.822946Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.305",
              "Zact": "381.341",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:16.986975Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "124.305",
              "Zact": "387.097",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:17.149970Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "164.305",
              "Zact": "392.853",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:17.314330Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "204.305",
              "Zact": "398.609",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:17.477330Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "244.305",
              "Zact": "404.366",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:17.640341Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "292.305",
              "Zact": "411.273",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:17.803304Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "332.305",
              "Zact": "417.029",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:17.967323Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "440",
              "TIME": "2021-03-04T02:52:18.131386Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "338",
              "Zact": "416.567",
              "S1load": "51",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:47.322107Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "298",
              "Zact": "404.401",
              "S1load": "122",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:47.487174Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "258",
              "Zact": "392.235",
              "S1load": "39",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:47.650995Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "218",
              "Zact": "380.07",
              "S1load": "11",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:47.814736Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "178",
              "Zact": "367.904",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:47.978437Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "130",
              "Zact": "353.305",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:48.141402Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.954",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:48.305380Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.482",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:52:48.959268Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.282",
              "Zact": "316.298",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:52:58.286131Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.282",
              "Zact": "329.88",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:52:59.106389Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.882",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:52:59.270121Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.749",
              "Zact": "337.896",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:52:59.432979Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.632",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:52:59.595911Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.252",
              "Zact": "273.946",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:19.075290Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.013",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:53:19.566602Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.599",
              "Zact": "289.706",
              "S1load": "11",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:33.019277Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.143",
              "Zact": "289.434",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:33.183379Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.687",
              "Zact": "289.162",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:33.346457Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.23",
              "Zact": "288.891",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:33.509184Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.632",
              "Zact": "288.69",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:53:33.671525Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.763",
              "Zact": "289.255",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:33.834560Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.308",
              "Zact": "295.434",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:53:33.997607Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.308",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:53:34.324264Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.989",
              "Zact": "289.746",
              "S1load": "12",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:47.260683Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.575",
              "Zact": "290.708",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:53:47.920181Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.15",
              "Zact": "292.256",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:00.199348Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.476",
              "Zact": "291.908",
              "S1load": "8",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:00.362828Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.866",
              "Zact": "291.49",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:00.526510Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.19",
              "Zact": "291.142",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:00.689373Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.515",
              "Zact": "290.794",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:00.854522Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.84",
              "Zact": "290.445",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:01.017457Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.165",
              "Zact": "290.097",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:01.183979Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.482",
              "Zact": "289.757",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:01.348047Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.613",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:01.512132Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.97",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:01.677136Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.785",
              "Zact": "292.946",
              "S1load": "9",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:13.634204Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.547",
              "Zact": "292.905",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:13.796990Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.25",
              "Zact": "292.753",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:13.959977Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.827",
              "Zact": "292.502",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:14.122994Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.038",
              "Zact": "293.017",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:14.286000Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.595",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:14.449247Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.135",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:26.403180Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.463",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:27.058078Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.635",
              "Zact": "296.479",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:27.223268Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.205",
              "Zact": "292.943",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:39.020759Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.973",
              "Zact": "292.946",
              "S1load": "8",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:39.184024Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.888",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:39.674977Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.147",
              "Zact": "316.685",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:40.491993Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.604",
              "Zact": "316.413",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:40.656901Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.677",
              "Zact": "316.142",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:40.819879Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.22",
              "Zact": "315.87",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:40.984048Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.763",
              "Zact": "315.599",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:41.147852Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.307",
              "Zact": "315.327",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:41.311015Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.85",
              "Zact": "315.056",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:41.474920Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.182",
              "Zact": "314.89",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:41.637874Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.313",
              "Zact": "315.455",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:41.803478Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "134.954",
              "Zact": "354.812",
              "S1load": "9",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:42.784646Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "174.954",
              "Zact": "366.977",
              "S1load": "65",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:42.948625Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "214.954",
              "Zact": "379.143",
              "S1load": "35",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:43.111297Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "254.954",
              "Zact": "391.309",
              "S1load": "17",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:43.274557Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "302.954",
              "Zact": "405.908",
              "S1load": "8",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:43.437536Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "342.954",
              "Zact": "418.074",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:43.600917Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:43.764081Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "318",
              "Zact": "410.484",
              "S1load": "90",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:44.255122Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "278",
              "Zact": "398.318",
              "S1load": "132",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:44.418360Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "238",
              "Zact": "386.152",
              "S1load": "51",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:44.583380Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "198",
              "Zact": "373.987",
              "S1load": "15",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:44.746417Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "150",
              "Zact": "359.388",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:44.910427Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "110",
              "Zact": "347.222",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:45.079199Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.954",
              "Zact": "343.896",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:45.242951Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "110.418",
              "Zact": "319.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:45.569154Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "111.882",
              "Zact": "319.234",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:45.732157Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.882",
              "Zact": "317.995",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:45.896163Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.69",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:46.059161Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.99",
              "Zact": "317.217",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:46.222829Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.785",
              "Zact": "316.688",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:46.385548Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.941",
              "Zact": "316.365",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:46.548287Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.186",
              "Zact": "316.294",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:46.715307Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.958",
              "Zact": "316.198",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:46.878459Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.633",
              "Zact": "315.95",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:47.043324Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.577",
              "Zact": "315.479",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:47.206323Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.411",
              "Zact": "315.055",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:47.370333Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.829",
              "Zact": "314.627",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:47.533269Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.882",
              "Zact": "314.121",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:47.698800Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.727",
              "Zact": "292.796",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:52.942699Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.003",
              "Zact": "292.795",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:53.597770Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.78",
              "Zact": "292.707",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:53.760938Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.443",
              "Zact": "292.487",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:53.925789Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.017",
              "Zact": "292.045",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:54.089787Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.58",
              "Zact": "291.441",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:54.257721Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.144",
              "Zact": "290.837",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:54.420807Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.707",
              "Zact": "290.232",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:54.584839Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.271",
              "Zact": "289.628",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:54.748237Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.562",
              "Zact": "289.596",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:54.912569Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.748",
              "Zact": "289.59",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:55.076054Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.647",
              "Zact": "289.433",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:55.245074Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.404",
              "Zact": "289.091",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:55.409880Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.043",
              "Zact": "288.724",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:55.573908Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.309",
              "Zact": "288.349",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:55.738709Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.332",
              "Zact": "287.788",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:54:55.904720Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.152",
              "Zact": "273.796",
              "S1load": "8",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:59.345995Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.486",
              "Zact": "273.801",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:59.509132Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.754",
              "Zact": "273.993",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:59.673262Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.758",
              "Zact": "274.425",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:54:59.838226Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.327",
              "Zact": "275.022",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:00.001189Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.415",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:00.164207Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "112.728",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:00.980262Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "124.954",
              "Zact": "351.77",
              "S1load": "24",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:01.309225Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "164.954",
              "Zact": "363.936",
              "S1load": "71",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:01.473331Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "204.954",
              "Zact": "376.102",
              "S1load": "53",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:01.636484Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "244.954",
              "Zact": "388.267",
              "S1load": "24",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:01.800213Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "284.954",
              "Zact": "400.433",
              "S1load": "11",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:01.963402Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "332.954",
              "Zact": "415.032",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:02.126550Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:02.290589Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334",
              "Zact": "415.62",
              "S1load": "86",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:03.436529Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "294",
              "Zact": "404.354",
              "S1load": "50",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:03.602053Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "254",
              "Zact": "393.088",
              "S1load": "15",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:03.767273Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "214",
              "Zact": "381.822",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:03.930465Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "174",
              "Zact": "370.556",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:04.094487Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "134",
              "Zact": "359.29",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:04.258441Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:04.423799Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.01",
              "Zact": "289.082",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:06.221898Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.874",
              "Zact": "289.015",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:06.385806Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.738",
              "Zact": "288.947",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:06.549740Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.603",
              "Zact": "288.879",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:06.713573Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.467",
              "Zact": "288.811",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:06.877617Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.331",
              "Zact": "288.743",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:07.040931Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.195",
              "Zact": "288.675",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:07.204940Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.033",
              "Zact": "288.594",
              "S1load": "8",
              "part_count": "441",
              "TIME": "2021-03-04T02:55:07.367664Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.869",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:07.540069Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "140.165",
              "Zact": "361.026",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:16.719402Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "180.165",
              "Zact": "372.292",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:16.889225Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "220.165",
              "Zact": "383.558",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:17.053275Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "260.165",
              "Zact": "394.824",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:17.216323Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "300.165",
              "Zact": "406.09",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:17.380634Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "340.165",
              "Zact": "417.357",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:17.543668Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:55:17.712429Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "318",
              "Zact": "402.2",
              "S1load": "74",
              "part_count": "441",
              "TIME": "2021-03-04T02:56:04.393586Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "270",
              "Zact": "373.4",
              "S1load": "22",
              "part_count": "441",
              "TIME": "2021-03-04T02:56:04.558600Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "230",
              "Zact": "369.253",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T02:56:04.722435Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312",
              "Zact": "398.6",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T02:58:49.000580Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272",
              "Zact": "374.6",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:58:49.163971Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "224",
              "Zact": "369.253",
              "S1load": "0",
              "part_count": "441",
              "TIME": "2021-03-04T02:58:49.328550Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "21.275",
              "Zact": "372.139",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:13.790463Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "61.275",
              "Zact": "377.912",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:13.955544Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.275",
              "Zact": "383.684",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:14.119492Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "141.275",
              "Zact": "389.456",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:14.283867Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "189.275",
              "Zact": "396.383",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:14.448392Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "229.275",
              "Zact": "402.156",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:14.619574Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "269.275",
              "Zact": "407.928",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:14.783863Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "309.275",
              "Zact": "413.7",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:14.946706Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T02:59:15.110701Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324",
              "Zact": "405.8",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:00:05.916810Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "284",
              "Zact": "381.8",
              "S1load": "1",
              "part_count": "441",
              "TIME": "2021-03-04T03:00:06.080481Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "244",
              "Zact": "369.253",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:06.243798Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "7.403",
              "Zact": "368.053",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:07.553812Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "34.475",
              "Zact": "374.148",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:18.700667Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.475",
              "Zact": "381.059",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:18.870378Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "122.475",
              "Zact": "386.818",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:19.034004Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "162.475",
              "Zact": "392.577",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:19.198961Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "202.475",
              "Zact": "398.336",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:19.362179Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "242.475",
              "Zact": "404.095",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:19.526292Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "282.475",
              "Zact": "409.854",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:19.690653Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "322.475",
              "Zact": "415.613",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:19.853714Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:00:20.017812Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "344",
              "Zact": "418.392",
              "S1load": "58",
              "part_count": "441",
              "TIME": "2021-03-04T03:05:14.447545Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "296",
              "Zact": "403.793",
              "S1load": "123",
              "part_count": "441",
              "TIME": "2021-03-04T03:05:14.610929Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "256",
              "Zact": "391.627",
              "S1load": "46",
              "part_count": "441",
              "TIME": "2021-03-04T03:05:14.775766Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "216",
              "Zact": "379.461",
              "S1load": "14",
              "part_count": "441",
              "TIME": "2021-03-04T03:05:14.938555Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "176",
              "Zact": "367.296",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T03:05:15.102735Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "136",
              "Zact": "355.13",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:05:15.265858Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.954",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:15.429514Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.482",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:16.083811Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.282",
              "Zact": "316.317",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:25.433239Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.282",
              "Zact": "330.888",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:26.250222Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.882",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:26.413300Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.653",
              "Zact": "331.896",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:26.576328Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.632",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:26.741651Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.675",
              "Zact": "273.946",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:46.083925Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.013",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:05:46.742413Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.735",
              "Zact": "289.638",
              "S1load": "9",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:00.188965Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.279",
              "Zact": "289.366",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:00.352780Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.823",
              "Zact": "289.094",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:00.516768Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.366",
              "Zact": "288.822",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:00.679799Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.632",
              "Zact": "288.69",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:00.842769Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.308",
              "Zact": "289.434",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:01.005752Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.182",
              "Zact": "289.746",
              "S1load": "9",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:14.445083Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.188",
              "Zact": "290.312",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:14.933733Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.575",
              "Zact": "290.708",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:15.097698Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.93",
              "Zact": "292.436",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:27.235869Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.297",
              "Zact": "292.1",
              "S1load": "9",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:27.398934Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.622",
              "Zact": "291.752",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:27.563673Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.946",
              "Zact": "291.403",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:27.727692Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.336",
              "Zact": "290.986",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:27.890751Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.661",
              "Zact": "290.637",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:28.054333Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.985",
              "Zact": "290.289",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:28.217313Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.31",
              "Zact": "289.941",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:28.380364Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.482",
              "Zact": "289.757",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:28.545704Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.97",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:28.708723Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.362",
              "Zact": "292.946",
              "S1load": "11",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:40.673705Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.131",
              "Zact": "292.941",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:40.836722Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.875",
              "Zact": "292.85",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:41.000284Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.529",
              "Zact": "292.651",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:41.163932Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.907",
              "Zact": "292.452",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:41.327303Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.595",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:41.490303Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "78.866",
              "Zact": "292.946",
              "S1load": "10",
              "part_count": "441",
              "TIME": "2021-03-04T03:06:53.459993Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.463",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:54.116254Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.635",
              "Zact": "294.079",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:06:54.281165Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.55",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:06.245859Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.888",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:06.897982Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.5",
              "Zact": "317.456",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:07.224927Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.446",
              "Zact": "316.834",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:07.552046Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.903",
              "Zact": "316.563",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:07.716071Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.378",
              "Zact": "316.291",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:07.880049Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.922",
              "Zact": "316.02",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:08.044033Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.465",
              "Zact": "315.748",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:08.209068Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.117",
              "Zact": "315.422",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:08.373386Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.66",
              "Zact": "315.151",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:08.537126Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.182",
              "Zact": "314.89",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:08.701126Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.313",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:08.866113Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "122.954",
              "Zact": "351.162",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:09.849283Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "162.954",
              "Zact": "363.328",
              "S1load": "47",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:10.012378Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "202.954",
              "Zact": "375.493",
              "S1load": "50",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:10.175177Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "242.954",
              "Zact": "387.659",
              "S1load": "21",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:10.341006Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "282.954",
              "Zact": "399.825",
              "S1load": "10",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:10.504214Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "322.954",
              "Zact": "411.991",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:10.667179Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:10.839517Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "330",
              "Zact": "414.134",
              "S1load": "64",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:13.132644Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "290",
              "Zact": "401.968",
              "S1load": "125",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:13.295323Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "242",
              "Zact": "387.369",
              "S1load": "71",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:13.460529Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "202",
              "Zact": "375.203",
              "S1load": "21",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:13.626450Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "162",
              "Zact": "363.038",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:13.789459Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "122",
              "Zact": "350.872",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:13.952492Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.954",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:14.116474Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.882",
              "Zact": "318.118",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:14.770448Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.69",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:14.934744Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.844",
              "Zact": "317.404",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:15.097553Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.501",
              "Zact": "316.829",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:15.261549Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.567",
              "Zact": "316.436",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:15.427410Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.86",
              "Zact": "316.293",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:15.590585Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.735",
              "Zact": "316.242",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:15.754581Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.428",
              "Zact": "316.048",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:15.918606Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.482",
              "Zact": "315.526",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:16.082499Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.359",
              "Zact": "315.086",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:16.247624Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.762",
              "Zact": "314.743",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:16.415634Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.882",
              "Zact": "314.321",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:16.578618Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.327",
              "Zact": "292.796",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:21.828483Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.705",
              "Zact": "292.722",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:22.648217Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.384",
              "Zact": "292.515",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:22.811243Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.871",
              "Zact": "292.2",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:22.974245Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.411",
              "Zact": "291.622",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:23.137258Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.975",
              "Zact": "291.018",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:23.300281Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.538",
              "Zact": "290.414",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:23.463121Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.102",
              "Zact": "289.809",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:23.626564Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.162",
              "Zact": "289.596",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:23.789288Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.437",
              "Zact": "289.491",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:24.117389Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.121",
              "Zact": "289.232",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:24.281529Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.91",
              "Zact": "288.824",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:24.445096Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.259",
              "Zact": "288.466",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:24.608090Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.332",
              "Zact": "287.988",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:24.772178Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.752",
              "Zact": "273.796",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:28.221665Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.392",
              "Zact": "273.908",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:28.549376Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.496",
              "Zact": "274.273",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:28.718370Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.293",
              "Zact": "274.958",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:28.883727Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.415",
              "Zact": "275.396",
              "S1load": "3",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:29.047761Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "112.954",
              "Zact": "348.121",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:30.187730Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "152.954",
              "Zact": "360.286",
              "S1load": "63",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:30.352771Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "200.954",
              "Zact": "374.885",
              "S1load": "68",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:30.515628Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "240.954",
              "Zact": "387.051",
              "S1load": "30",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:30.678734Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "280.954",
              "Zact": "399.217",
              "S1load": "13",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:30.842662Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "320.954",
              "Zact": "411.382",
              "S1load": "7",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:31.005898Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:31.168628Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "306",
              "Zact": "407.734",
              "S1load": "71",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:32.477617Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "266",
              "Zact": "396.468",
              "S1load": "21",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:32.641400Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "226",
              "Zact": "385.202",
              "S1load": "5",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:32.805134Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "186",
              "Zact": "373.936",
              "S1load": "2",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:32.968600Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "146",
              "Zact": "362.67",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:33.132577Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106",
              "Zact": "351.403",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:33.295689Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "343.76",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:33.459683Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.051",
              "Zact": "289.103",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:35.097043Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.915",
              "Zact": "289.035",
              "S1load": "4",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:35.261060Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.779",
              "Zact": "288.967",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:35.424179Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.643",
              "Zact": "288.899",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:35.587098Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.508",
              "Zact": "288.831",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:35.750893Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.372",
              "Zact": "288.763",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:35.913837Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.236",
              "Zact": "288.696",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:36.078464Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.1",
              "Zact": "288.628",
              "S1load": "8",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:36.241019Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.926",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:36.404093Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "120.165",
              "Zact": "355.393",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:45.568777Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "160.165",
              "Zact": "366.659",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:45.731846Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "200.165",
              "Zact": "377.925",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:45.895560Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "240.165",
              "Zact": "389.191",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:46.062719Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "280.165",
              "Zact": "400.457",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:46.225985Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "328.165",
              "Zact": "413.977",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:46.388619Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:07:46.552645Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312",
              "Zact": "398.6",
              "S1load": "79",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:49.308984Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272",
              "Zact": "374.6",
              "S1load": "23",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:49.471833Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "232",
              "Zact": "369.253",
              "S1load": "6",
              "part_count": "441",
              "TIME": "2021-03-04T03:07:49.636711Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "3.341",
              "Zact": "369.827",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:01.934591Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "51.341",
              "Zact": "376.715",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:02.098598Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.341",
              "Zact": "382.455",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:02.263978Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "131.341",
              "Zact": "388.196",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:02.426686Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "171.341",
              "Zact": "393.936",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:02.590703Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "211.341",
              "Zact": "399.676",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:02.753703Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "251.341",
              "Zact": "405.416",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:02.916738Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "291.341",
              "Zact": "411.156",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:03.080736Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "331.341",
              "Zact": "416.896",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:03.243630Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "441",
              "TIME": "2021-03-04T03:08:03.406665Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "318",
              "Zact": "402.2",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:09:32.777617Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "278",
              "Zact": "378.2",
              "S1load": "1",
              "part_count": "442",
              "TIME": "2021-03-04T03:09:32.941643Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "230",
              "Zact": "369.253",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:33.104742Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "8.055",
              "Zact": "370.403",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:45.405123Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "48.055",
              "Zact": "376.155",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:45.569744Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.055",
              "Zact": "381.907",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:45.732808Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "128.055",
              "Zact": "387.659",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:45.896074Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "168.055",
              "Zact": "393.411",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:46.059607Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "208.055",
              "Zact": "399.163",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:46.222959Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "256.055",
              "Zact": "406.066",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:46.387512Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "296.055",
              "Zact": "411.818",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:46.551427Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "336.055",
              "Zact": "417.57",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:46.716568Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:09:46.880652Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334",
              "Zact": "415.35",
              "S1load": "63",
              "part_count": "442",
              "TIME": "2021-03-04T03:10:25.691385Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "294",
              "Zact": "403.185",
              "S1load": "125",
              "part_count": "442",
              "TIME": "2021-03-04T03:10:25.854505Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "254",
              "Zact": "391.019",
              "S1load": "44",
              "part_count": "442",
              "TIME": "2021-03-04T03:10:26.017491Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "214",
              "Zact": "378.853",
              "S1load": "10",
              "part_count": "442",
              "TIME": "2021-03-04T03:10:26.181547Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "174",
              "Zact": "366.687",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:10:26.344328Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "134",
              "Zact": "354.522",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:10:26.507215Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.954",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:26.671307Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.482",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:27.336336Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.282",
              "Zact": "316.336",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:36.679938Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.282",
              "Zact": "335.923",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:37.497425Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.882",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:37.660137Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.634",
              "Zact": "330.696",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:37.824201Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.632",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:37.987193Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.868",
              "Zact": "273.946",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:57.343604Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.013",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:10:57.997452Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.094",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:11:11.271067Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.762",
              "Zact": "289.624",
              "S1load": "7",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:11.434174Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.306",
              "Zact": "289.353",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:11.597179Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.849",
              "Zact": "289.081",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:11.760022Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.393",
              "Zact": "288.809",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:11.922228Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.763",
              "Zact": "289.255",
              "S1load": "1",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:12.085209Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.308",
              "Zact": "289.434",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:12.249153Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.606",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:11:25.524068Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.188",
              "Zact": "290.312",
              "S1load": "1",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:26.179526Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.575",
              "Zact": "290.708",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:26.342665Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.953",
              "Zact": "292.42",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:11:38.463040Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.314",
              "Zact": "292.082",
              "S1load": "9",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:38.627066Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.638",
              "Zact": "291.734",
              "S1load": "7",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:38.791164Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.963",
              "Zact": "291.385",
              "S1load": "6",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:38.956516Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.288",
              "Zact": "291.037",
              "S1load": "5",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:39.119657Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.613",
              "Zact": "290.689",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:39.282591Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.002",
              "Zact": "290.271",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:11:39.446699Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.327",
              "Zact": "289.923",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:39.609028Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.482",
              "Zact": "289.757",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:11:39.772279Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.97",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:39.935337Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.401",
              "Zact": "292.946",
              "S1load": "11",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:51.920272Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.322",
              "Zact": "292.929",
              "S1load": "6",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:52.084006Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.05",
              "Zact": "292.81",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:52.246923Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.671",
              "Zact": "292.586",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:11:52.409916Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.907",
              "Zact": "292.452",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:11:52.572919Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.595",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:11:52.736654Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.519",
              "Zact": "292.946",
              "S1load": "7",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:04.842745Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.463",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:05.338056Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.635",
              "Zact": "294.079",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:05.501172Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.434",
              "Zact": "292.946",
              "S1load": "10",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:17.447620Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.888",
              "Zact": "293.512",
              "S1load": "1",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:18.108705Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.5",
              "Zact": "316.862",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:18.599669Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.984",
              "Zact": "316.604",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:18.926675Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.441",
              "Zact": "316.332",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:19.090718Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.949",
              "Zact": "316.006",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:19.253697Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.492",
              "Zact": "315.735",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:19.417719Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.035",
              "Zact": "315.463",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:19.582058Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.578",
              "Zact": "315.191",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:19.745045Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.122",
              "Zact": "314.92",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:19.907935Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.313",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:20.073099Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116.954",
              "Zact": "349.337",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:21.053894Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156.954",
              "Zact": "361.503",
              "S1load": "37",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:21.217248Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "196.954",
              "Zact": "373.669",
              "S1load": "48",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:21.380949Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "236.954",
              "Zact": "385.834",
              "S1load": "24",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:21.544972Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276.954",
              "Zact": "398",
              "S1load": "11",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:21.713839Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324.954",
              "Zact": "412.599",
              "S1load": "6",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:21.878963Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:22.043067Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "340",
              "Zact": "417.175",
              "S1load": "30",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:22.535308Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "300",
              "Zact": "405.009",
              "S1load": "116",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:22.703872Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "252",
              "Zact": "390.41",
              "S1load": "97",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:22.868029Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "212",
              "Zact": "378.245",
              "S1load": "29",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:23.031044Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "172",
              "Zact": "366.079",
              "S1load": "9",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:23.195041Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "132",
              "Zact": "353.913",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:23.358975Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.954",
              "Zact": "346.296",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:23.522077Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.882",
              "Zact": "318.676",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:24.179123Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.69",
              "Zact": "317.896",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:24.344126Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.758",
              "Zact": "317.565",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:24.507183Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.292",
              "Zact": "316.959",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:24.670137Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.271",
              "Zact": "316.513",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:24.834172Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.527",
              "Zact": "316.303",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:24.997171Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.542",
              "Zact": "316.269",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:25.162089Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.269",
              "Zact": "316.108",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:25.325076Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.058",
              "Zact": "315.738",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:25.489620Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.19",
              "Zact": "315.173",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:25.652667Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.686",
              "Zact": "314.835",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:25.815475Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.879",
              "Zact": "314.449",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:25.978888Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.882",
              "Zact": "313.821",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:26.143822Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.115",
              "Zact": "292.814",
              "S1load": "5",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:31.219788Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.327",
              "Zact": "292.796",
              "S1load": "6",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:31.383782Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.36",
              "Zact": "292.773",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:32.037810Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.098",
              "Zact": "292.623",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:32.201046Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.68",
              "Zact": "292.352",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:32.363852Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.158",
              "Zact": "291.894",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:32.527623Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.721",
              "Zact": "291.29",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:32.690687Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.397",
              "Zact": "290.565",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:32.854810Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.961",
              "Zact": "289.96",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:33.017855Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.83",
              "Zact": "289.596",
              "S1load": "5",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:33.181314Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.101",
              "Zact": "289.555",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:33.506945Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.811",
              "Zact": "289.376",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:33.669914Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.64",
              "Zact": "288.973",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:33.833938Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.136",
              "Zact": "288.635",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:33.996875Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.329",
              "Zact": "288.249",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:34.161089Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.332",
              "Zact": "287.621",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:34.324067Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.485",
              "Zact": "273.796",
              "S1load": "7",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:37.765843Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.816",
              "Zact": "273.824",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:37.929943Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.038",
              "Zact": "274.08",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:38.092010Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.947",
              "Zact": "274.562",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:38.257008Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.412",
              "Zact": "275.319",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:38.421064Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "110.415",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:38.585162Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.882",
              "Zact": "277.796",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:38.749095Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "142.954",
              "Zact": "357.245",
              "S1load": "43",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:39.733378Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "182.954",
              "Zact": "369.411",
              "S1load": "76",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:39.896449Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "222.954",
              "Zact": "381.576",
              "S1load": "44",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:40.067246Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "262.954",
              "Zact": "393.742",
              "S1load": "16",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:40.230440Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "302.954",
              "Zact": "405.908",
              "S1load": "8",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:40.394446Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "342.954",
              "Zact": "418.074",
              "S1load": "4",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:40.558378Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:40.721488Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324",
              "Zact": "412.804",
              "S1load": "94",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:41.866457Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "284",
              "Zact": "401.538",
              "S1load": "29",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:42.030429Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "244",
              "Zact": "390.271",
              "S1load": "9",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:42.193396Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "196",
              "Zact": "376.752",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:42.358029Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156",
              "Zact": "365.486",
              "S1load": "2",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:42.520372Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116",
              "Zact": "354.22",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:42.685698Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:42.849383Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.112",
              "Zact": "289.133",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:44.493757Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.976",
              "Zact": "289.065",
              "S1load": "3",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:44.656908Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.813",
              "Zact": "288.984",
              "S1load": "5",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:44.819785Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.677",
              "Zact": "288.916",
              "S1load": "6",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:44.984605Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.542",
              "Zact": "288.848",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:45.148780Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.406",
              "Zact": "288.78",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:45.311385Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.27",
              "Zact": "288.713",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:45.474480Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.134",
              "Zact": "288.645",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:45.637493Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.999",
              "Zact": "288.577",
              "S1load": "8",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:45.800553Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.821",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:45.963572Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "110.165",
              "Zact": "352.577",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:54.973340Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "150.165",
              "Zact": "363.843",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:55.137778Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "190.165",
              "Zact": "375.109",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:55.302425Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "230.165",
              "Zact": "386.375",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:55.465530Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "270.165",
              "Zact": "397.641",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:55.628216Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "310.165",
              "Zact": "408.907",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:55.792235Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:12:55.955259Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312",
              "Zact": "398.6",
              "S1load": "80",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:58.756613Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272",
              "Zact": "374.6",
              "S1load": "19",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:58.919420Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "232",
              "Zact": "369.253",
              "S1load": "6",
              "part_count": "442",
              "TIME": "2021-03-04T03:12:59.083498Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "46.055",
              "Zact": "375.868",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:11.540910Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.055",
              "Zact": "381.62",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:11.713156Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126.055",
              "Zact": "387.372",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:11.877212Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166.055",
              "Zact": "393.124",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:12.040323Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206.055",
              "Zact": "398.876",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:12.204326Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "246.055",
              "Zact": "404.628",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:12.368258Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "286.055",
              "Zact": "410.38",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:12.531362Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334.055",
              "Zact": "417.282",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:12.695323Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "442",
              "TIME": "2021-03-04T03:13:12.860359Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "306",
              "Zact": "406.822",
              "S1load": "114",
              "part_count": "443",
              "TIME": "2021-03-04T03:17:29.497682Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "266",
              "Zact": "394.644",
              "S1load": "62",
              "part_count": "443",
              "TIME": "2021-03-04T03:17:29.660441Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "226",
              "Zact": "382.466",
              "S1load": "19",
              "part_count": "443",
              "TIME": "2021-03-04T03:17:29.823484Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "186",
              "Zact": "370.288",
              "S1load": "6",
              "part_count": "443",
              "TIME": "2021-03-04T03:17:29.987723Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "146",
              "Zact": "358.11",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:17:30.150746Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "107.194",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "443",
              "TIME": "2021-03-04T03:17:30.314770Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.722",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:17:30.968675Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.522",
              "Zact": "316.528",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:17:40.451203Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "65.522",
              "Zact": "321.824",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:17:41.106483Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "105.522",
              "Zact": "341.965",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:17:41.269187Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "111.065",
              "Zact": "342.696",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:17:41.432319Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.872",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:17:41.595374Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.343",
              "Zact": "273.946",
              "S1load": "7",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:01.104894Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.253",
              "Zact": "274.512",
              "S1load": "1",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:01.598913Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.719",
              "Zact": "289.746",
              "S1load": "10",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:15.051848Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.275",
              "Zact": "289.488",
              "S1load": "5",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:15.214836Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.818",
              "Zact": "289.216",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:15.378876Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.471",
              "Zact": "288.89",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:15.542838Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.872",
              "Zact": "288.69",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:15.706877Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.003",
              "Zact": "289.255",
              "S1load": "1",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:15.870862Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.548",
              "Zact": "290.634",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:16.033888Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.23",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:29.313733Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.428",
              "Zact": "290.312",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:29.967664Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.815",
              "Zact": "293.108",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:30.135196Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.39",
              "Zact": "292.256",
              "S1load": "10",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:42.262363Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.781",
              "Zact": "291.838",
              "S1load": "8",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:42.426368Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.106",
              "Zact": "291.49",
              "S1load": "6",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:42.590392Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.43",
              "Zact": "291.142",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:42.754499Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.755",
              "Zact": "290.793",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:42.920984Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.08",
              "Zact": "290.445",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:43.083641Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.405",
              "Zact": "290.097",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:43.246591Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.722",
              "Zact": "289.757",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:43.409991Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.853",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:43.573544Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.21",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:43.736646Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.026",
              "Zact": "292.946",
              "S1load": "9",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:55.699264Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.936",
              "Zact": "292.883",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:55.863296Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.618",
              "Zact": "292.71",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:56.027291Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.147",
              "Zact": "292.452",
              "S1load": "1",
              "part_count": "443",
              "TIME": "2021-03-04T03:18:56.191290Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.278",
              "Zact": "293.017",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:56.354303Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.835",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:18:56.517245Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.529",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:08.484295Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.703",
              "Zact": "293.512",
              "S1load": "1",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:09.136370Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.875",
              "Zact": "296.479",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:09.300366Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.444",
              "Zact": "292.943",
              "S1load": "9",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:21.094360Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.213",
              "Zact": "292.946",
              "S1load": "7",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:21.257270Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "80.128",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:21.748254Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.387",
              "Zact": "316.685",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:22.568697Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.844",
              "Zact": "316.413",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:22.733124Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.917",
              "Zact": "316.142",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:22.898162Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.46",
              "Zact": "315.87",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:23.061021Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.112",
              "Zact": "315.544",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:23.227192Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.656",
              "Zact": "315.273",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:23.391257Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.199",
              "Zact": "315.001",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:23.555475Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.553",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:23.719441Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "145.194",
              "Zact": "357.865",
              "S1load": "30",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:24.873193Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "185.194",
              "Zact": "370.043",
              "S1load": "58",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:25.037505Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "225.194",
              "Zact": "382.221",
              "S1load": "30",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:25.202511Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "273.194",
              "Zact": "396.834",
              "S1load": "14",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:25.368815Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "313.194",
              "Zact": "409.012",
              "S1load": "7",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:25.532280Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:25.696294Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334",
              "Zact": "415.347",
              "S1load": "28",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:38.305031Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "294",
              "Zact": "403.169",
              "S1load": "115",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:38.468038Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "254",
              "Zact": "390.991",
              "S1load": "78",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:38.632067Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "214",
              "Zact": "378.813",
              "S1load": "23",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:38.795665Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "174",
              "Zact": "366.635",
              "S1load": "7",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:38.960068Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "134",
              "Zact": "354.457",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:39.123099Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "107.194",
              "Zact": "346.296",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:39.286086Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.122",
              "Zact": "318.49",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:39.941478Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.93",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:40.104495Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.985",
              "Zact": "317.597",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:40.267546Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.494",
              "Zact": "316.986",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:40.430502Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.454",
              "Zact": "316.53",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:40.594440Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.701",
              "Zact": "316.307",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:40.757441Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.898",
              "Zact": "316.254",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:40.920441Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.606",
              "Zact": "316.073",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:41.083490Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.439",
              "Zact": "315.668",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:41.246571Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.383",
              "Zact": "315.197",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:41.410571Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.909",
              "Zact": "314.853",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:41.574487Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.117",
              "Zact": "314.469",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:41.742401Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.122",
              "Zact": "313.854",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:41.905608Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.319",
              "Zact": "292.823",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:46.989779Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.5",
              "Zact": "292.796",
              "S1load": "6",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:47.154337Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.717",
              "Zact": "292.759",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:47.807666Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.437",
              "Zact": "292.59",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:47.970625Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.989",
              "Zact": "292.303",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:48.133690Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.482",
              "Zact": "291.803",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:48.296714Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.046",
              "Zact": "291.199",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:48.459669Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.609",
              "Zact": "290.595",
              "S1load": "5",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:48.623688Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.173",
              "Zact": "289.991",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:48.786685Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.003",
              "Zact": "289.596",
              "S1load": "6",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:48.949717Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.455",
              "Zact": "289.537",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:49.275788Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.143",
              "Zact": "289.338",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:49.438851Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.995",
              "Zact": "288.915",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:49.602889Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.424",
              "Zact": "288.58",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:49.766455Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.572",
              "Zact": "288.188",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:49.929133Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.593",
              "Zact": "273.796",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:53.372570Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.252",
              "Zact": "273.846",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:53.700621Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.438",
              "Zact": "274.14",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:53.863758Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.285",
              "Zact": "274.649",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:54.026463Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.648",
              "Zact": "275.286",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:54.190357Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108.655",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:54.353155Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "114.122",
              "Zact": "276.596",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:19:54.517082Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "141.194",
              "Zact": "356.647",
              "S1load": "51",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:55.500382Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "181.194",
              "Zact": "368.825",
              "S1load": "79",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:55.663875Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "221.194",
              "Zact": "381.003",
              "S1load": "38",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:55.826594Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "261.194",
              "Zact": "393.181",
              "S1load": "17",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:55.989629Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "309.194",
              "Zact": "407.794",
              "S1load": "8",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:56.152278Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:19:56.314443Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324",
              "Zact": "412.309",
              "S1load": "101",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:23.146983Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "284",
              "Zact": "400.145",
              "S1load": "134",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:23.311195Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "244",
              "Zact": "387.98",
              "S1load": "46",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:23.474024Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "204",
              "Zact": "375.815",
              "S1load": "14",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:23.637246Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156",
              "Zact": "361.218",
              "S1load": "5",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:23.802220Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116",
              "Zact": "349.053",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:23.965386Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.934",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:24.129210Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.862",
              "Zact": "318.18",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:24.783399Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.67",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:24.947477Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.804",
              "Zact": "317.435",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:25.111167Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.618",
              "Zact": "316.756",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:25.274496Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.732",
              "Zact": "316.398",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:25.440460Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.04",
              "Zact": "316.295",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:25.604532Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.827",
              "Zact": "316.222",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:25.768493Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.498",
              "Zact": "316.007",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:25.933888Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.415",
              "Zact": "315.55",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:26.098521Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.416",
              "Zact": "315.039",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:26.263587Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.779",
              "Zact": "314.685",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:26.428562Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.862",
              "Zact": "314.221",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:26.591562Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.507",
              "Zact": "292.796",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:31.833208Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.648",
              "Zact": "292.729",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:32.657718Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.334",
              "Zact": "292.528",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:32.821265Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.913",
              "Zact": "292.136",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:32.988629Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.476",
              "Zact": "291.531",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:33.152253Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.04",
              "Zact": "290.927",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:33.316271Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.603",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:33.479292Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.167",
              "Zact": "289.718",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:33.641679Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.344",
              "Zact": "289.596",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:33.804937Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.609",
              "Zact": "289.594",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:33.968797Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.381",
              "Zact": "289.5",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:34.132834Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.243",
              "Zact": "289.161",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:34.297824Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.96",
              "Zact": "288.774",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:34.461367Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.267",
              "Zact": "288.408",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:34.624313Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.312",
              "Zact": "287.888",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:34.789817Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.667",
              "Zact": "273.796",
              "S1load": "5",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:38.224634Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.557",
              "Zact": "273.948",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:38.554086Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.613",
              "Zact": "274.347",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:38.720103Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.254",
              "Zact": "274.926",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:38.884117Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.395",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:39.047639Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116.934",
              "Zact": "349.337",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:21:40.193167Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156.934",
              "Zact": "361.502",
              "S1load": "59",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:40.356232Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "196.934",
              "Zact": "373.666",
              "S1load": "62",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:40.519118Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "236.934",
              "Zact": "385.831",
              "S1load": "28",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:40.684244Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276.934",
              "Zact": "397.996",
              "S1load": "13",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:40.848267Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "316.934",
              "Zact": "410.16",
              "S1load": "6",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:41.012255Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "443",
              "TIME": "2021-03-04T03:21:41.177184Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334",
              "Zact": "415.62",
              "S1load": "100",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:31.155769Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "294",
              "Zact": "404.354",
              "S1load": "39",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:31.318476Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "246",
              "Zact": "390.835",
              "S1load": "12",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:31.483068Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206",
              "Zact": "379.569",
              "S1load": "4",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:31.646560Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166",
              "Zact": "368.303",
              "S1load": "1",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:31.810569Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126",
              "Zact": "357.036",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:31.973898Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:32.136864Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.146",
              "Zact": "289.15",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:33.769773Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.01",
              "Zact": "289.082",
              "S1load": "2",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:33.933764Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.874",
              "Zact": "289.015",
              "S1load": "5",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:34.096808Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.738",
              "Zact": "288.947",
              "S1load": "6",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:34.259651Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.576",
              "Zact": "288.865",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:34.424801Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.44",
              "Zact": "288.797",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:34.587823Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.304",
              "Zact": "288.73",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:34.751827Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.168",
              "Zact": "288.662",
              "S1load": "8",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:34.915849Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.033",
              "Zact": "288.594",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:35.079671Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.869",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:35.242842Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "132.165",
              "Zact": "358.773",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:44.402503Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "172.165",
              "Zact": "370.039",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:44.565432Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "220.165",
              "Zact": "383.558",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:44.728661Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "260.165",
              "Zact": "394.824",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:44.891664Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "300.165",
              "Zact": "406.09",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:45.054821Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "340.165",
              "Zact": "417.357",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:45.219730Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:22:45.389408Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "320",
              "Zact": "403.4",
              "S1load": "102",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:48.034561Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "280",
              "Zact": "379.4",
              "S1load": "30",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:48.199784Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "240",
              "Zact": "369.253",
              "S1load": "7",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:48.362704Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "6.983",
              "Zact": "366.853",
              "S1load": "1",
              "part_count": "443",
              "TIME": "2021-03-04T03:22:49.675109Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "38.055",
              "Zact": "374.717",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:00.815568Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "78.055",
              "Zact": "380.469",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:00.978737Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "118.055",
              "Zact": "386.221",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:01.142903Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166.055",
              "Zact": "393.124",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:01.305486Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206.055",
              "Zact": "398.876",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:01.469774Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "246.055",
              "Zact": "404.628",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:01.633764Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "286.055",
              "Zact": "410.38",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:01.798834Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "326.055",
              "Zact": "416.132",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:01.962771Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "443",
              "TIME": "2021-03-04T03:23:02.126830Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "342",
              "Zact": "417.784",
              "S1load": "62",
              "part_count": "444",
              "TIME": "2021-03-04T03:23:42.733238Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "302",
              "Zact": "405.619",
              "S1load": "125",
              "part_count": "444",
              "TIME": "2021-03-04T03:23:42.897199Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "262",
              "Zact": "393.455",
              "S1load": "44",
              "part_count": "444",
              "TIME": "2021-03-04T03:23:43.060656Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "214",
              "Zact": "378.857",
              "S1load": "13",
              "part_count": "444",
              "TIME": "2021-03-04T03:23:43.224627Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "174",
              "Zact": "366.693",
              "S1load": "4",
              "part_count": "444",
              "TIME": "2021-03-04T03:23:43.387514Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "134",
              "Zact": "354.528",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:23:43.559335Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.929",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:23:43.722606Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.457",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:23:44.375441Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.257",
              "Zact": "316.336",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:23:53.729068Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.257",
              "Zact": "334.916",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:23:54.552130Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.857",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:23:54.717084Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.628",
              "Zact": "331.896",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:23:54.881711Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.607",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:23:55.044336Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.419",
              "Zact": "273.946",
              "S1load": "6",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:14.521837Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.988",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:15.013799Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.988",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:15.508442Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.601",
              "Zact": "289.692",
              "S1load": "9",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:28.450562Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.146",
              "Zact": "289.42",
              "S1load": "5",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:28.621365Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.689",
              "Zact": "289.148",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:28.784582Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.233",
              "Zact": "288.877",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:28.947513Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.607",
              "Zact": "288.69",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:29.110699Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.283",
              "Zact": "289.434",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:29.273377Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.157",
              "Zact": "289.746",
              "S1load": "10",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:42.722356Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.163",
              "Zact": "290.312",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:43.214811Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.55",
              "Zact": "290.708",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:43.378612Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.906",
              "Zact": "292.436",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:55.517845Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.272",
              "Zact": "292.099",
              "S1load": "9",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:55.681205Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.597",
              "Zact": "291.751",
              "S1load": "7",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:55.846530Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.922",
              "Zact": "291.403",
              "S1load": "6",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:56.009230Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.247",
              "Zact": "291.055",
              "S1load": "5",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:56.178096Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.571",
              "Zact": "290.706",
              "S1load": "4",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:56.342558Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.961",
              "Zact": "290.289",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:56.506789Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.286",
              "Zact": "289.941",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:56.671189Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.457",
              "Zact": "289.757",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:24:56.836265Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.945",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:24:56.999288Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.337",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:08.961068Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.106",
              "Zact": "292.941",
              "S1load": "8",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:09.124045Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.85",
              "Zact": "292.85",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:09.286986Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.504",
              "Zact": "292.651",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:09.451190Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.882",
              "Zact": "292.452",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:09.615333Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.013",
              "Zact": "293.017",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:09.779351Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.57",
              "Zact": "294.453",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:09.943379Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "78.84",
              "Zact": "292.946",
              "S1load": "10",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:21.755909Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.438",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:22.410948Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.61",
              "Zact": "294.079",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:22.574688Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.677",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:34.561026Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.863",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:35.215394Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.475",
              "Zact": "317.456",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:35.542392Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.312",
              "Zact": "316.78",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:35.870642Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.769",
              "Zact": "316.508",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:36.033989Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.462",
              "Zact": "316.237",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:36.198308Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.005",
              "Zact": "315.965",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:36.360896Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.548",
              "Zact": "315.694",
              "S1load": "4",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:36.524905Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.092",
              "Zact": "315.422",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:36.687836Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.744",
              "Zact": "315.096",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:36.852908Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.157",
              "Zact": "314.89",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:37.022863Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.288",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:37.185939Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.857",
              "Zact": "317.855",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:37.515456Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "130.929",
              "Zact": "353.594",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:38.175834Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "170.929",
              "Zact": "365.759",
              "S1load": "56",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:38.338917Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "210.929",
              "Zact": "377.923",
              "S1load": "43",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:38.502930Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "250.929",
              "Zact": "390.088",
              "S1load": "18",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:38.667029Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "290.929",
              "Zact": "402.252",
              "S1load": "9",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:38.831045Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "330.929",
              "Zact": "414.417",
              "S1load": "5",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:38.994209Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:39.158315Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "326",
              "Zact": "412.918",
              "S1load": "50",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:39.649276Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "286",
              "Zact": "400.753",
              "S1load": "121",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:39.812366Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "246",
              "Zact": "388.589",
              "S1load": "81",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:39.977249Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206",
              "Zact": "376.424",
              "S1load": "19",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:40.139986Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166",
              "Zact": "364.26",
              "S1load": "6",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:40.304076Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126",
              "Zact": "352.095",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:40.467093Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.929",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:40.632112Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.857",
              "Zact": "318.242",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:41.295171Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.665",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:41.459051Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.78",
              "Zact": "317.467",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:41.623197Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.566",
              "Zact": "316.78",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:41.787185Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.664",
              "Zact": "316.41",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:41.951560Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.968",
              "Zact": "316.294",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:42.115171Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.785",
              "Zact": "316.229",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:42.279232Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.463",
              "Zact": "316.021",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:42.443259Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.363",
              "Zact": "315.574",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:42.607262Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.28",
              "Zact": "315.115",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:42.770479Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.709",
              "Zact": "314.78",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:42.934147Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.857",
              "Zact": "314.254",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:43.097546Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.204",
              "Zact": "292.797",
              "S1load": "7",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:48.340673Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.767",
              "Zact": "292.796",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:48.504694Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.605",
              "Zact": "292.736",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:49.161290Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.298",
              "Zact": "292.541",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:49.325260Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.808",
              "Zact": "292.235",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:49.487982Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.33",
              "Zact": "291.683",
              "S1load": "4",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:49.653026Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.893",
              "Zact": "291.079",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:49.816085Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.569",
              "Zact": "290.354",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:49.979016Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.133",
              "Zact": "289.749",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:50.143036Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.27",
              "Zact": "289.596",
              "S1load": "7",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:50.313721Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.562",
              "Zact": "289.595",
              "S1load": "5",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:50.476835Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.339",
              "Zact": "289.508",
              "S1load": "4",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:50.639848Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.001",
              "Zact": "289.28",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:50.803811Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.835",
              "Zact": "288.855",
              "S1load": "4",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:50.968302Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.254",
              "Zact": "288.428",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:51.131307Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.307",
              "Zact": "287.922",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:51.294290Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.59",
              "Zact": "273.796",
              "S1load": "11",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:54.739480Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.487",
              "Zact": "273.933",
              "S1load": "5",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:55.067029Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.56",
              "Zact": "274.321",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:55.232157Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.228",
              "Zact": "274.893",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:55.398359Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.39",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:55.563885Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116.929",
              "Zact": "349.337",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:56.712823Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156.929",
              "Zact": "361.501",
              "S1load": "66",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:56.876917Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "196.929",
              "Zact": "373.666",
              "S1load": "62",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:57.039490Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "236.929",
              "Zact": "385.83",
              "S1load": "28",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:57.202435Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276.929",
              "Zact": "397.995",
              "S1load": "13",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:57.366914Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324.929",
              "Zact": "412.592",
              "S1load": "6",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:57.530102Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:57.694379Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "300",
              "Zact": "406.044",
              "S1load": "59",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:59.003292Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "260",
              "Zact": "394.778",
              "S1load": "18",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:59.166335Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "220",
              "Zact": "383.512",
              "S1load": "6",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:59.329334Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "180",
              "Zact": "372.246",
              "S1load": "2",
              "part_count": "444",
              "TIME": "2021-03-04T03:25:59.492265Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "140",
              "Zact": "360.98",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:59.655589Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:25:59.818360Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.057",
              "Zact": "289.106",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:01.623854Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.895",
              "Zact": "289.025",
              "S1load": "4",
              "part_count": "444",
              "TIME": "2021-03-04T03:26:01.786887Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.759",
              "Zact": "288.957",
              "S1load": "6",
              "part_count": "444",
              "TIME": "2021-03-04T03:26:01.950723Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.623",
              "Zact": "288.889",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:02.113878Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.487",
              "Zact": "288.821",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:02.277738Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.352",
              "Zact": "288.753",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:02.441054Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.216",
              "Zact": "288.685",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:02.604623Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.08",
              "Zact": "288.618",
              "S1load": "8",
              "part_count": "444",
              "TIME": "2021-03-04T03:26:02.767613Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.936",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:02.930655Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126.165",
              "Zact": "357.083",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:12.118527Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "174.165",
              "Zact": "370.602",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:12.281503Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "214.165",
              "Zact": "381.868",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:12.445292Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "254.165",
              "Zact": "393.134",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:12.611541Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "294.165",
              "Zact": "404.401",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:12.776359Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334.165",
              "Zact": "415.667",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:12.940703Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:13.104522Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "332",
              "Zact": "410.6",
              "S1load": "142",
              "part_count": "444",
              "TIME": "2021-03-04T03:26:15.749737Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "292",
              "Zact": "386.6",
              "S1load": "43",
              "part_count": "444",
              "TIME": "2021-03-04T03:26:15.914054Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "252",
              "Zact": "369.253",
              "S1load": "11",
              "part_count": "444",
              "TIME": "2021-03-04T03:26:16.076790Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "26.055",
              "Zact": "372.992",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:28.531463Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "66.055",
              "Zact": "378.744",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:28.694284Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "114.055",
              "Zact": "385.646",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:28.858295Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "154.055",
              "Zact": "391.398",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:29.021297Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "194.055",
              "Zact": "397.15",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:29.185306Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "234.055",
              "Zact": "402.902",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:29.349327Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "274.055",
              "Zact": "408.654",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:29.512348Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "314.055",
              "Zact": "414.406",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:29.675743Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "444",
              "TIME": "2021-03-04T03:26:29.838393Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "316",
              "Zact": "409.877",
              "S1load": "111",
              "part_count": "445",
              "TIME": "2021-03-04T03:27:24.757023Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276",
              "Zact": "397.712",
              "S1load": "66",
              "part_count": "445",
              "TIME": "2021-03-04T03:27:24.921608Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "228",
              "Zact": "383.115",
              "S1load": "20",
              "part_count": "445",
              "TIME": "2021-03-04T03:27:25.085121Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "188",
              "Zact": "370.95",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:27:25.255054Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "148",
              "Zact": "358.786",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:27:25.418122Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108",
              "Zact": "346.621",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:27:25.583165Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.929",
              "Zact": "342.696",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:25.747232Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.857",
              "Zact": "316.392",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:26.242361Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.457",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:26.405682Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.257",
              "Zact": "316.586",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:35.765721Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.257",
              "Zact": "328.873",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:36.422982Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.857",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:36.588299Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "107.743",
              "Zact": "339.096",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:36.751033Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.607",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:36.916333Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.343",
              "Zact": "273.946",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:27:56.429147Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.988",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:56.919206Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.032",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:27:57.410788Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.546",
              "Zact": "289.72",
              "S1load": "10",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:10.359013Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.091",
              "Zact": "289.448",
              "S1load": "5",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:10.522062Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.743",
              "Zact": "289.122",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:10.685057Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.287",
              "Zact": "288.85",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:10.849970Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.607",
              "Zact": "288.69",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:11.014064Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.283",
              "Zact": "289.434",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:11.183003Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.283",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:11.673102Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.457",
              "Zact": "320.076",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:11.837110Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.08",
              "Zact": "289.746",
              "S1load": "10",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:24.631037Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.163",
              "Zact": "290.312",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:25.124008Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.55",
              "Zact": "290.708",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:25.287099Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.95",
              "Zact": "292.404",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:37.440006Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.305",
              "Zact": "292.064",
              "S1load": "9",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:37.602960Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.63",
              "Zact": "291.716",
              "S1load": "7",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:37.767069Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.955",
              "Zact": "291.368",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:37.931076Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.279",
              "Zact": "291.02",
              "S1load": "5",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:38.094048Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.604",
              "Zact": "290.671",
              "S1load": "4",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:38.256856Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.929",
              "Zact": "290.323",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:38.421109Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.318",
              "Zact": "289.905",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:38.584952Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.588",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:38.751662Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.945",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:38.915935Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.183",
              "Zact": "292.937",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:51.037041Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.921",
              "Zact": "292.835",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:51.202017Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.562",
              "Zact": "292.625",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:51.366088Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.882",
              "Zact": "292.452",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:28:51.531056Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.013",
              "Zact": "293.017",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:51.694851Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.57",
              "Zact": "296.853",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:28:51.859856Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "78.765",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:03.671560Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.438",
              "Zact": "293.512",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:04.327518Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.61",
              "Zact": "294.079",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:04.490533Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.602",
              "Zact": "292.946",
              "S1load": "8",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:16.463602Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.863",
              "Zact": "294.712",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:17.117216Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.367",
              "Zact": "316.807",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:17.772815Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.824",
              "Zact": "316.536",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:17.935885Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.408",
              "Zact": "316.264",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:18.099882Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.951",
              "Zact": "315.992",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:18.263853Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.603",
              "Zact": "315.667",
              "S1load": "4",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:18.428527Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.146",
              "Zact": "315.395",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:18.592599Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.689",
              "Zact": "315.123",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:18.756631Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.157",
              "Zact": "314.89",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:18.921638Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.288",
              "Zact": "315.455",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:19.085318Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "111.548",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:19.740986Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126.929",
              "Zact": "352.378",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:20.068887Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166.929",
              "Zact": "364.542",
              "S1load": "51",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:20.234028Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206.929",
              "Zact": "376.707",
              "S1load": "40",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:20.397038Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "246.929",
              "Zact": "388.871",
              "S1load": "20",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:20.559799Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "286.929",
              "Zact": "401.036",
              "S1load": "10",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:20.723916Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "326.929",
              "Zact": "413.2",
              "S1load": "5",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:20.888987Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:21.051923Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "330",
              "Zact": "414.134",
              "S1load": "37",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:21.543715Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "290",
              "Zact": "401.97",
              "S1load": "118",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:21.707093Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "250",
              "Zact": "389.805",
              "S1load": "71",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:21.870773Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "210",
              "Zact": "377.641",
              "S1load": "21",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:22.032797Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "170",
              "Zact": "365.476",
              "S1load": "7",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:22.195797Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "130",
              "Zact": "353.312",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:22.359994Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.929",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:22.524103Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.857",
              "Zact": "318.366",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:23.179842Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.665",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:23.344183Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.748",
              "Zact": "317.532",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:23.508109Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.307",
              "Zact": "316.932",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:23.671171Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.542",
              "Zact": "316.436",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:23.835197Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.835",
              "Zact": "316.293",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:23.999237Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.71",
              "Zact": "316.242",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:24.162076Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.403",
              "Zact": "316.047",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:24.326416Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.269",
              "Zact": "315.621",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:24.489274Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.212",
              "Zact": "315.15",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:24.656025Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.678",
              "Zact": "314.817",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:24.818956Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.856",
              "Zact": "314.429",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:24.983167Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.857",
              "Zact": "313.788",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:25.145974Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.127",
              "Zact": "292.807",
              "S1load": "5",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:30.221378Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.369",
              "Zact": "292.796",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:30.385418Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.529",
              "Zact": "292.748",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:31.042444Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.236",
              "Zact": "292.566",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:31.205617Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.767",
              "Zact": "292.269",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:31.370743Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.274",
              "Zact": "291.743",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:31.534869Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.837",
              "Zact": "291.139",
              "S1load": "4",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:31.698486Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.401",
              "Zact": "290.534",
              "S1load": "5",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:31.861621Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.077",
              "Zact": "289.809",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:32.027616Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.138",
              "Zact": "289.596",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:32.190763Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.266",
              "Zact": "289.523",
              "S1load": "4",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:32.516475Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.938",
              "Zact": "289.311",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:32.680492Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.784",
              "Zact": "288.886",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:32.844385Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.187",
              "Zact": "288.543",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:33.007434Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.307",
              "Zact": "288.121",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:33.170838Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.461",
              "Zact": "273.796",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:36.611284Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.115",
              "Zact": "273.864",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:36.938824Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.277",
              "Zact": "274.183",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:37.105046Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.08",
              "Zact": "274.709",
              "S1load": "3",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:37.269036Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.389",
              "Zact": "275.353",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:37.434039Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.857",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:37.597041Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "144.929",
              "Zact": "357.852",
              "S1load": "55",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:38.745802Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "192.929",
              "Zact": "372.449",
              "S1load": "77",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:38.908907Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "232.929",
              "Zact": "384.614",
              "S1load": "35",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:39.073975Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272.929",
              "Zact": "396.778",
              "S1load": "16",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:39.238934Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312.929",
              "Zact": "408.943",
              "S1load": "8",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:39.402259Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:39.565283Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312",
              "Zact": "409.424",
              "S1load": "66",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:40.881927Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272",
              "Zact": "398.158",
              "S1load": "20",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:41.046008Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "232",
              "Zact": "386.892",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:41.209055Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "184",
              "Zact": "373.372",
              "S1load": "2",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:41.372406Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "144",
              "Zact": "362.106",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:41.537244Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "104",
              "Zact": "350.84",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:41.700406Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "347.36",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:41.864161Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.071",
              "Zact": "289.113",
              "S1load": "1",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:43.509726Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.935",
              "Zact": "289.045",
              "S1load": "4",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:43.673887Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.772",
              "Zact": "288.964",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:43.838301Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.637",
              "Zact": "288.896",
              "S1load": "5",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:44.002300Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.501",
              "Zact": "288.828",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:44.166199Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.365",
              "Zact": "288.76",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:44.330345Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.229",
              "Zact": "288.692",
              "S1load": "7",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:44.493337Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.094",
              "Zact": "288.624",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:44.657251Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.955",
              "Zact": "288.56",
              "S1load": "8",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:44.820756Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "130.165",
              "Zact": "358.21",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:54.018945Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "170.165",
              "Zact": "369.476",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:54.181811Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "210.165",
              "Zact": "380.742",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:54.346980Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "250.165",
              "Zact": "392.008",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:54.509989Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "290.165",
              "Zact": "403.274",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:54.675005Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "330.165",
              "Zact": "414.54",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:54.838993Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:29:55.001922Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312",
              "Zact": "398.6",
              "S1load": "80",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:57.701343Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272",
              "Zact": "374.6",
              "S1load": "23",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:57.865407Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "232",
              "Zact": "369.253",
              "S1load": "6",
              "part_count": "445",
              "TIME": "2021-03-04T03:29:58.030057Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "10.055",
              "Zact": "370.691",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:10.343990Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "50.055",
              "Zact": "376.443",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:10.507964Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.055",
              "Zact": "382.195",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:10.671978Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "138.055",
              "Zact": "389.097",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:10.843901Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "178.055",
              "Zact": "394.849",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:11.007026Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "218.055",
              "Zact": "400.601",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:11.171015Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "258.055",
              "Zact": "406.353",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:11.335062Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "298.055",
              "Zact": "412.105",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:11.498951Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "338.055",
              "Zact": "417.858",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:11.662009Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "445",
              "TIME": "2021-03-04T03:30:11.825679Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "344",
              "Zact": "418.391",
              "S1load": "58",
              "part_count": "446",
              "TIME": "2021-03-04T04:29:49.074803Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "304",
              "Zact": "406.217",
              "S1load": "116",
              "part_count": "446",
              "TIME": "2021-03-04T04:29:49.239211Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "264",
              "Zact": "394.042",
              "S1load": "47",
              "part_count": "446",
              "TIME": "2021-03-04T04:29:49.401837Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "224",
              "Zact": "381.867",
              "S1load": "14",
              "part_count": "446",
              "TIME": "2021-03-04T04:29:49.565818Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "184",
              "Zact": "369.693",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:29:49.729786Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "144",
              "Zact": "357.518",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:29:49.891619Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "107.129",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:29:50.055966Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.657",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:29:50.711012Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.457",
              "Zact": "316.317",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:00.074124Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.457",
              "Zact": "330.888",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:00.892286Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "114.057",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:01.057594Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "105.905",
              "Zact": "336.696",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:01.220624Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.807",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:01.382565Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.855",
              "Zact": "273.946",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:20.713556Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.188",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:21.375193Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.232",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:21.868499Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.802",
              "Zact": "289.692",
              "S1load": "9",
              "part_count": "446",
              "TIME": "2021-03-04T04:30:34.816705Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.346",
              "Zact": "289.42",
              "S1load": "5",
              "part_count": "446",
              "TIME": "2021-03-04T04:30:34.979678Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.889",
              "Zact": "289.148",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:30:35.142655Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.542",
              "Zact": "288.822",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:30:35.305612Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.807",
              "Zact": "288.69",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:35.470671Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.483",
              "Zact": "289.434",
              "S1load": "1",
              "part_count": "446",
              "TIME": "2021-03-04T04:30:35.633657Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.32",
              "Zact": "289.746",
              "S1load": "10",
              "part_count": "446",
              "TIME": "2021-03-04T04:30:49.065217Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.75",
              "Zact": "290.708",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:30:49.723319Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.391",
              "Zact": "292.187",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:02.007958Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.716",
              "Zact": "291.838",
              "S1load": "7",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:02.172704Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.04",
              "Zact": "291.49",
              "S1load": "6",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:02.339198Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.365",
              "Zact": "291.142",
              "S1load": "5",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:02.503053Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.755",
              "Zact": "290.724",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:02.666079Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.08",
              "Zact": "290.376",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:02.829069Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.404",
              "Zact": "290.028",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:02.992192Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.657",
              "Zact": "289.757",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:03.155180Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.788",
              "Zact": "290.323",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:03.318796Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.145",
              "Zact": "290.906",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:03.481117Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.114",
              "Zact": "292.946",
              "S1load": "8",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:15.448909Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.87",
              "Zact": "292.883",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:15.618931Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.553",
              "Zact": "292.71",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:15.782957Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.082",
              "Zact": "292.452",
              "S1load": "1",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:15.946960Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.213",
              "Zact": "293.017",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:16.109987Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.77",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:16.274001Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.77",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:16.602027Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.464",
              "Zact": "292.946",
              "S1load": "9",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:28.224638Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.81",
              "Zact": "294.079",
              "S1load": "1",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:28.878857Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.533",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:40.846401Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "80.063",
              "Zact": "293.512",
              "S1load": "1",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:41.502790Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.214",
              "Zact": "316.631",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:42.319885Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.671",
              "Zact": "316.359",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:42.482738Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.961",
              "Zact": "316.087",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:42.646776Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.504",
              "Zact": "315.816",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:42.809622Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.047",
              "Zact": "315.544",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:42.974605Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.591",
              "Zact": "315.273",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:43.137614Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.134",
              "Zact": "315.001",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:43.301597Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.488",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:43.464809Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "145.129",
              "Zact": "357.862",
              "S1load": "30",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:44.609855Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "185.129",
              "Zact": "370.036",
              "S1load": "59",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:44.774742Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "233.129",
              "Zact": "384.646",
              "S1load": "30",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:44.941175Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "273.129",
              "Zact": "396.821",
              "S1load": "14",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:45.105136Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "313.129",
              "Zact": "408.995",
              "S1load": "7",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:45.268864Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:45.432870Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "310",
              "Zact": "408.043",
              "S1load": "103",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:46.084653Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "262",
              "Zact": "393.433",
              "S1load": "127",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:46.249828Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "222",
              "Zact": "381.259",
              "S1load": "41",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:46.414840Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "182",
              "Zact": "369.084",
              "S1load": "12",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:46.577848Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "142",
              "Zact": "356.909",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:46.740855Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "107.129",
              "Zact": "346.296",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:46.904864Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.057",
              "Zact": "318.738",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:47.563279Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.865",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:47.727892Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.882",
              "Zact": "317.729",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:47.890882Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.287",
              "Zact": "317.099",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:48.053859Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.168",
              "Zact": "316.605",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:48.216890Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.373",
              "Zact": "316.331",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:48.379853Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.52",
              "Zact": "316.287",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:48.542883Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.275",
              "Zact": "316.161",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:48.705905Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.997",
              "Zact": "315.856",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:48.869252Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.129",
              "Zact": "315.291",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:49.034247Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.768",
              "Zact": "314.924",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:49.197009Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.034",
              "Zact": "314.549",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:49.361961Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.057",
              "Zact": "313.988",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:49.525045Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.136",
              "Zact": "292.876",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:54.623389Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.169",
              "Zact": "292.796",
              "S1load": "5",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:54.786345Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.496",
              "Zact": "292.777",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:55.441606Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.239",
              "Zact": "292.634",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:55.605343Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.831",
              "Zact": "292.368",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:55.769625Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.305",
              "Zact": "291.924",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:55.933352Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.868",
              "Zact": "291.32",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:56.096396Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.432",
              "Zact": "290.716",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:56.259566Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.108",
              "Zact": "289.991",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:56.430434Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.938",
              "Zact": "289.596",
              "S1load": "5",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:56.593461Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.237",
              "Zact": "289.561",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:56.919695Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.954",
              "Zact": "289.388",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:57.083392Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.768",
              "Zact": "288.997",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:31:57.247562Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.294",
              "Zact": "288.653",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:57.410663Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.502",
              "Zact": "288.269",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:57.575759Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.507",
              "Zact": "287.521",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:31:57.738725Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.861",
              "Zact": "273.796",
              "S1load": "6",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:01.192753Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.187",
              "Zact": "273.846",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:01.355813Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.374",
              "Zact": "274.14",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:01.520880Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.221",
              "Zact": "274.649",
              "S1load": "1",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:01.684671Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.583",
              "Zact": "275.286",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:01.848792Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108.59",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:02.012712Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "114.057",
              "Zact": "276.596",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:02.176737Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "141.129",
              "Zact": "356.644",
              "S1load": "39",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:03.155781Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "181.129",
              "Zact": "368.819",
              "S1load": "75",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:03.318784Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "221.129",
              "Zact": "380.993",
              "S1load": "39",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:03.482139Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "261.129",
              "Zact": "393.168",
              "S1load": "17",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:03.646110Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "301.129",
              "Zact": "405.343",
              "S1load": "8",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:03.809812Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "341.129",
              "Zact": "417.517",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:03.974923Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:04.137858Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "344",
              "Zact": "418.392",
              "S1load": "58",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:40.856471Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "304",
              "Zact": "406.227",
              "S1load": "123",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:41.021203Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "264",
              "Zact": "394.063",
              "S1load": "85",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:41.186210Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "224",
              "Zact": "381.898",
              "S1load": "26",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:41.351190Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "176",
              "Zact": "367.301",
              "S1load": "8",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:41.514231Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "136",
              "Zact": "355.137",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:41.678185Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.929",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:41.841186Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.857",
              "Zact": "318.8",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:42.494237Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.665",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:42.657235Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.676",
              "Zact": "317.762",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:42.820589Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.055",
              "Zact": "317.128",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:42.984522Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.133",
              "Zact": "316.548",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:43.147628Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.37",
              "Zact": "316.312",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:43.310522Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.439",
              "Zact": "316.277",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:43.473579Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.178",
              "Zact": "316.131",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:43.637627Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.938",
              "Zact": "315.785",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:43.800313Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.882",
              "Zact": "315.314",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:43.964319Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.548",
              "Zact": "314.941",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:44.130271Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.827",
              "Zact": "314.568",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:44.293343Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.857",
              "Zact": "314.021",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:44.456285Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.914",
              "Zact": "292.893",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:49.545223Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.17",
              "Zact": "292.796",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:49.709311Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.258",
              "Zact": "292.78",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:50.364786Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.005",
              "Zact": "292.644",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:50.528781Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.607",
              "Zact": "292.384",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:50.695793Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.19",
              "Zact": "291.833",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:50.859807Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.753",
              "Zact": "291.229",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:51.023950Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.317",
              "Zact": "290.624",
              "S1load": "4",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:51.187817Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.88",
              "Zact": "290.02",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:51.351762Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.673",
              "Zact": "289.596",
              "S1load": "5",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:51.516252Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89",
              "Zact": "289.565",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:51.844467Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.849",
              "Zact": "289.35",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:52.008742Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.703",
              "Zact": "288.929",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:52.172752Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.144",
              "Zact": "288.598",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:52.339318Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.307",
              "Zact": "288.209",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:52.502978Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.597",
              "Zact": "273.796",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:56.106986Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.925",
              "Zact": "273.838",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:56.271099Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.123",
              "Zact": "274.12",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:56.435034Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.99",
              "Zact": "274.621",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:56.598090Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.378",
              "Zact": "275.254",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:56.760980Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.39",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:32:56.924115Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "138.929",
              "Zact": "356.027",
              "S1load": "37",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:58.071344Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "178.929",
              "Zact": "368.192",
              "S1load": "78",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:58.235554Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "218.929",
              "Zact": "380.356",
              "S1load": "41",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:58.402142Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "258.929",
              "Zact": "392.521",
              "S1load": "18",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:58.567258Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "306.929",
              "Zact": "407.118",
              "S1load": "8",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:58.731495Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "5",
              "part_count": "446",
              "TIME": "2021-03-04T04:32:58.895292Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "316",
              "Zact": "410.55",
              "S1load": "96",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:00.206646Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276",
              "Zact": "399.284",
              "S1load": "29",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:00.370654Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "236",
              "Zact": "388.018",
              "S1load": "9",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:00.534346Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "196",
              "Zact": "376.752",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:00.697261Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156",
              "Zact": "365.486",
              "S1load": "1",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:00.860248Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116",
              "Zact": "354.22",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:01.025430Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:01.188335Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.084",
              "Zact": "289.12",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:02.832454Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.949",
              "Zact": "289.052",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:02.998048Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.813",
              "Zact": "288.984",
              "S1load": "5",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:03.159757Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.677",
              "Zact": "288.916",
              "S1load": "6",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:03.323501Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.542",
              "Zact": "288.848",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:03.488607Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.406",
              "Zact": "288.78",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:03.651561Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.243",
              "Zact": "288.699",
              "S1load": "7",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:03.822476Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.107",
              "Zact": "288.631",
              "S1load": "8",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:03.987226Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.971",
              "Zact": "288.563",
              "S1load": "7",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:04.150165Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.782",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:04.313110Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "287.51",
              "S1load": "3",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:07.433781Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "118.165",
              "Zact": "354.83",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:13.350360Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166.165",
              "Zact": "368.349",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:13.514124Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206.165",
              "Zact": "379.615",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:13.678227Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "246.165",
              "Zact": "390.881",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:13.842250Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "286.165",
              "Zact": "402.147",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:14.004747Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "326.165",
              "Zact": "413.413",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:14.168953Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:14.331775Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "320",
              "Zact": "403.4",
              "S1load": "102",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:17.040669Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "280",
              "Zact": "379.4",
              "S1load": "30",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:17.203732Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "240",
              "Zact": "369.253",
              "S1load": "9",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:17.368530Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "7.083",
              "Zact": "365.653",
              "S1load": "2",
              "part_count": "446",
              "TIME": "2021-03-04T04:33:18.680752Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "40.155",
              "Zact": "375.007",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:29.819774Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "80.155",
              "Zact": "380.76",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:29.984486Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "120.155",
              "Zact": "386.514",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:30.147479Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "160.155",
              "Zact": "392.268",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:30.310527Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "208.155",
              "Zact": "399.172",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:30.474332Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "248.155",
              "Zact": "404.926",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:30.637277Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "288.155",
              "Zact": "410.679",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:30.801533Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "328.155",
              "Zact": "416.433",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:30.964303Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "446",
              "TIME": "2021-03-04T04:33:31.128316Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "316",
              "Zact": "409.876",
              "S1load": "101",
              "part_count": "447",
              "TIME": "2021-03-04T04:34:41.299640Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276",
              "Zact": "397.711",
              "S1load": "85",
              "part_count": "447",
              "TIME": "2021-03-04T04:34:41.463789Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "236",
              "Zact": "385.546",
              "S1load": "20",
              "part_count": "447",
              "TIME": "2021-03-04T04:34:41.626939Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "196",
              "Zact": "373.38",
              "S1load": "6",
              "part_count": "447",
              "TIME": "2021-03-04T04:34:41.791634Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "156",
              "Zact": "361.215",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:34:41.954703Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116",
              "Zact": "349.05",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:42.117879Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.944",
              "Zact": "342.696",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:42.280898Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "109.872",
              "Zact": "318.328",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:42.771093Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.472",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:42.934494Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.272",
              "Zact": "316.509",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:34:52.267950Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "63.272",
              "Zact": "320.817",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:52.920873Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "103.272",
              "Zact": "340.958",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:53.086314Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.872",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:53.251400Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.529",
              "Zact": "324.696",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:53.414429Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.622",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:34:53.578453Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.051",
              "Zact": "273.946",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:12.915211Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.003",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:13.404824Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.277",
              "Zact": "289.746",
              "S1load": "11",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:26.844466Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.889",
              "Zact": "289.556",
              "S1load": "6",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:27.011345Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.433",
              "Zact": "289.284",
              "S1load": "4",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:27.174534Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.976",
              "Zact": "289.012",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:27.337830Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.622",
              "Zact": "288.69",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:27.499702Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.753",
              "Zact": "289.255",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:27.663630Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.298",
              "Zact": "289.434",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:27.826852Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.751",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:41.116597Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.178",
              "Zact": "290.312",
              "S1load": "1",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:41.776653Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.565",
              "Zact": "290.708",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:41.939672Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.105",
              "Zact": "292.29",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:54.078464Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.434",
              "Zact": "291.942",
              "S1load": "8",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:54.241322Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.758",
              "Zact": "291.594",
              "S1load": "6",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:54.404521Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.083",
              "Zact": "291.246",
              "S1load": "5",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:54.567298Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.473",
              "Zact": "290.828",
              "S1load": "4",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:54.730272Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.798",
              "Zact": "290.48",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:54.894406Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.122",
              "Zact": "290.132",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:55.057291Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.447",
              "Zact": "289.784",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:35:55.221196Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.603",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:55.385309Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.96",
              "Zact": "290.906",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:35:55.549508Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.699",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:07.518059Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.464",
              "Zact": "292.914",
              "S1load": "4",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:07.681087Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.175",
              "Zact": "292.773",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:07.844108Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.768",
              "Zact": "292.53",
              "S1load": "1",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:08.008101Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.028",
              "Zact": "293.017",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:08.172255Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.585",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:08.335162Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.202",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:20.302860Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.453",
              "Zact": "293.512",
              "S1load": "1",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:20.957651Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.625",
              "Zact": "294.079",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:21.124032Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.172",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:21.450547Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.169",
              "Zact": "292.967",
              "S1load": "9",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:32.934144Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.04",
              "Zact": "292.946",
              "S1load": "7",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:33.099124Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.878",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:33.591288Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.083",
              "Zact": "316.658",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:34.410061Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.54",
              "Zact": "316.386",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:34.574477Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.722",
              "Zact": "316.115",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:34.737773Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.265",
              "Zact": "315.843",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:34.902779Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.808",
              "Zact": "315.572",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:35.066800Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.351",
              "Zact": "315.3",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:35.229731Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.895",
              "Zact": "315.028",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:35.394976Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.172",
              "Zact": "314.89",
              "S1load": "1",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:35.558300Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.303",
              "Zact": "315.455",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:35.721237Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "140.944",
              "Zact": "356.636",
              "S1load": "23",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:36.701879Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "180.944",
              "Zact": "368.801",
              "S1load": "62",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:36.864927Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "220.944",
              "Zact": "380.967",
              "S1load": "32",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:37.028794Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "260.944",
              "Zact": "393.132",
              "S1load": "15",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:37.192934Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "308.944",
              "Zact": "407.73",
              "S1load": "8",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:37.356917Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:37.519972Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "316",
              "Zact": "409.876",
              "S1load": "93",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:38.174967Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276",
              "Zact": "397.711",
              "S1load": "133",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:38.338921Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "236",
              "Zact": "385.546",
              "S1load": "48",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:38.503115Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "188",
              "Zact": "370.947",
              "S1load": "14",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:38.666021Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "148",
              "Zact": "358.782",
              "S1load": "5",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:38.830188Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108",
              "Zact": "346.617",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:38.993991Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.944",
              "Zact": "342.696",
              "S1load": "1",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:39.156967Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "109.872",
              "Zact": "319.172",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:39.648634Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.872",
              "Zact": "317.933",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:39.812296Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.68",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:39.975285Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.008",
              "Zact": "317.187",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:40.139295Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.826",
              "Zact": "316.666",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:40.303287Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.995",
              "Zact": "316.355",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:40.466212Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.216",
              "Zact": "316.293",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:40.630315Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.984",
              "Zact": "316.189",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:40.793303Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.67",
              "Zact": "315.927",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:40.957320Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.614",
              "Zact": "315.456",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:41.121470Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.426",
              "Zact": "315.039",
              "S1load": "4",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:41.284391Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.789",
              "Zact": "314.685",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:41.447328Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.872",
              "Zact": "314.088",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:41.610350Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.517",
              "Zact": "292.796",
              "S1load": "5",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:46.839426Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.806",
              "Zact": "292.699",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:47.657722Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.461",
              "Zact": "292.473",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:47.821860Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.922",
              "Zact": "292.136",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:47.985999Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.486",
              "Zact": "291.531",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:48.149276Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.049",
              "Zact": "290.927",
              "S1load": "4",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:48.313897Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.613",
              "Zact": "290.323",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:48.475633Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.177",
              "Zact": "289.719",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:48.638409Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.353",
              "Zact": "289.596",
              "S1load": "7",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:48.801580Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.618",
              "Zact": "289.594",
              "S1load": "5",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:48.965612Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.534",
              "Zact": "289.464",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:49.129174Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.253",
              "Zact": "289.162",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:49.294957Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.97",
              "Zact": "288.775",
              "S1load": "4",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:49.458987Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.277",
              "Zact": "288.408",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:49.622973Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.322",
              "Zact": "287.888",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:49.786971Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.943",
              "Zact": "273.796",
              "S1load": "6",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:53.239937Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.566",
              "Zact": "273.948",
              "S1load": "2",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:53.567099Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.622",
              "Zact": "274.347",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:53.730903Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.264",
              "Zact": "274.926",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:53.893925Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.405",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:54.059257Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "116.944",
              "Zact": "349.337",
              "S1load": "7",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:55.207290Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "164.944",
              "Zact": "363.935",
              "S1load": "66",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:55.371307Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "204.944",
              "Zact": "376.101",
              "S1load": "63",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:55.536381Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "244.944",
              "Zact": "388.266",
              "S1load": "28",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:55.700258Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "284.944",
              "Zact": "400.431",
              "S1load": "13",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:55.863030Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324.944",
              "Zact": "412.596",
              "S1load": "6",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:56.027117Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:56.191000Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "340",
              "Zact": "417.31",
              "S1load": "90",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:57.339684Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "300",
              "Zact": "406.044",
              "S1load": "47",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:57.502817Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "260",
              "Zact": "394.778",
              "S1load": "14",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:57.664752Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "220",
              "Zact": "383.512",
              "S1load": "5",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:57.828059Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "172",
              "Zact": "369.992",
              "S1load": "1",
              "part_count": "447",
              "TIME": "2021-03-04T04:36:57.994467Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "132",
              "Zact": "358.726",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:58.158266Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:36:58.321255Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.03",
              "Zact": "289.093",
              "S1load": "1",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:00.122648Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.895",
              "Zact": "289.025",
              "S1load": "5",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:00.286146Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.759",
              "Zact": "288.957",
              "S1load": "6",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:00.450057Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.623",
              "Zact": "288.889",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:00.612696Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.46",
              "Zact": "288.808",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:00.775712Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.324",
              "Zact": "288.74",
              "S1load": "7",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:00.946475Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.189",
              "Zact": "288.672",
              "S1load": "8",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:01.111790Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.053",
              "Zact": "288.604",
              "S1load": "7",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:01.275799Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.897",
              "Zact": "288.56",
              "S1load": "8",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:01.439735Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "134.165",
              "Zact": "359.336",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:10.631897Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "182.165",
              "Zact": "372.855",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:10.795030Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "222.165",
              "Zact": "384.122",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:10.960056Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "262.165",
              "Zact": "395.388",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:11.122911Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "302.165",
              "Zact": "406.654",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:11.286071Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "342.165",
              "Zact": "417.92",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:11.450479Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:11.614092Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "314",
              "Zact": "399.8",
              "S1load": "85",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:14.289186Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "274",
              "Zact": "375.8",
              "S1load": "25",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:14.453169Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "234",
              "Zact": "369.253",
              "S1load": "8",
              "part_count": "447",
              "TIME": "2021-03-04T04:37:14.616210Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "4.155",
              "Zact": "369.828",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:26.890226Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "44.155",
              "Zact": "375.582",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:27.054019Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.155",
              "Zact": "381.336",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:27.218234Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "124.155",
              "Zact": "387.089",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:27.382083Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "164.155",
              "Zact": "392.843",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:27.546234Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "204.155",
              "Zact": "398.597",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:27.709277Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "244.155",
              "Zact": "404.35",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:27.873258Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "284.155",
              "Zact": "410.104",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:28.036290Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "324.155",
              "Zact": "415.858",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:28.200566Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "447",
              "TIME": "2021-03-04T04:37:28.364130Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334",
              "Zact": "415.351",
              "S1load": "83",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:19.688549Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "286",
              "Zact": "400.753",
              "S1load": "112",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:19.852646Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "246",
              "Zact": "388.588",
              "S1load": "34",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:20.016821Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206",
              "Zact": "376.423",
              "S1load": "10",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:20.182597Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166",
              "Zact": "364.259",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:20.345568Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126",
              "Zact": "352.094",
              "S1load": "1",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:20.509589Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.934",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:20.673000Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.462",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:21.328087Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.262",
              "Zact": "316.413",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:30.695051Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "61.262",
              "Zact": "319.81",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:31.349124Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.262",
              "Zact": "339.951",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:31.513155Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.862",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:31.676300Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.538",
              "Zact": "325.896",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:31.840314Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.612",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:38:32.004092Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.002",
              "Zact": "273.946",
              "S1load": "9",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:51.361810Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.993",
              "Zact": "274.512",
              "S1load": "1",
              "part_count": "448",
              "TIME": "2021-03-04T04:38:51.852399Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.229",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:05.286234Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.961",
              "Zact": "289.515",
              "S1load": "6",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:05.449100Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.504",
              "Zact": "289.243",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:05.614529Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.048",
              "Zact": "288.972",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:05.778333Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.591",
              "Zact": "288.7",
              "S1load": "2",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:05.942467Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.743",
              "Zact": "289.255",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:06.106465Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.288",
              "Zact": "289.434",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:06.269477Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.74",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:19.553425Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.168",
              "Zact": "290.312",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:20.216446Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.555",
              "Zact": "290.708",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:20.380486Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.095",
              "Zact": "292.29",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:32.502419Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.423",
              "Zact": "291.943",
              "S1load": "8",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:32.666430Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.748",
              "Zact": "291.594",
              "S1load": "7",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:32.830331Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.073",
              "Zact": "291.246",
              "S1load": "6",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:32.997925Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.398",
              "Zact": "290.898",
              "S1load": "5",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:33.161334Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.787",
              "Zact": "290.48",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:33.323966Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.112",
              "Zact": "290.132",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:33.488312Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.437",
              "Zact": "289.784",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:33.652318Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.593",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:33.815287Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.95",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:33.980041Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.842",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:45.964808Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.602",
              "Zact": "292.895",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:46.127769Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.295",
              "Zact": "292.732",
              "S1load": "2",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:46.294697Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.856",
              "Zact": "292.472",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:46.457870Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.018",
              "Zact": "293.017",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:46.620796Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.575",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:46.785231Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.192",
              "Zact": "292.946",
              "S1load": "9",
              "part_count": "448",
              "TIME": "2021-03-04T04:39:58.756804Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.615",
              "Zact": "294.079",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:39:59.412671Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.261",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:11.380506Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.868",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:12.034489Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.073",
              "Zact": "316.658",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:12.857340Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.53",
              "Zact": "316.386",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:13.020451Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.712",
              "Zact": "316.115",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:13.183425Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.255",
              "Zact": "315.843",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:13.346472Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.798",
              "Zact": "315.572",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:13.510481Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.45",
              "Zact": "315.246",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:13.674514Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.993",
              "Zact": "314.974",
              "S1load": "2",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:13.846353Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.293",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:14.009514Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108.934",
              "Zact": "346.904",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:14.989556Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "148.934",
              "Zact": "359.069",
              "S1load": "23",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:15.152942Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "188.934",
              "Zact": "371.233",
              "S1load": "62",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:15.316812Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "228.934",
              "Zact": "383.398",
              "S1load": "32",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:15.479867Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "268.934",
              "Zact": "395.563",
              "S1load": "13",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:15.644971Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "308.934",
              "Zact": "407.728",
              "S1load": "7",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:15.808948Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:15.972745Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "308",
              "Zact": "407.444",
              "S1load": "93",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:16.627707Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "268",
              "Zact": "395.279",
              "S1load": "133",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:16.791735Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "228",
              "Zact": "383.114",
              "S1load": "37",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:16.957219Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "188",
              "Zact": "370.949",
              "S1load": "11",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:17.121798Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "148",
              "Zact": "358.785",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:17.284805Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108",
              "Zact": "346.62",
              "S1load": "1",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:17.448866Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.934",
              "Zact": "337.896",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:17.612978Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.862",
              "Zact": "318.924",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:18.103714Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.67",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:18.266803Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.673",
              "Zact": "317.829",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:18.431593Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.998",
              "Zact": "317.187",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:18.596432Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.816",
              "Zact": "316.666",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:18.760483Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.244",
              "Zact": "316.324",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:18.924480Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.365",
              "Zact": "316.284",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:19.088202Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.115",
              "Zact": "316.151",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:19.252213Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.849",
              "Zact": "315.833",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:19.416179Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.793",
              "Zact": "315.362",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:19.580215Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.51",
              "Zact": "314.975",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:19.743218Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.817",
              "Zact": "314.608",
              "S1load": "2",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:19.907261Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.862",
              "Zact": "314.088",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:20.071273Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.884",
              "Zact": "292.93",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:25.145595Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.771",
              "Zact": "292.796",
              "S1load": "7",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:25.308305Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.181",
              "Zact": "292.786",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:25.962346Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.939",
              "Zact": "292.664",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:26.132465Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.56",
              "Zact": "292.415",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:26.295342Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.024",
              "Zact": "292.016",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:26.458421Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.588",
              "Zact": "291.411",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:26.621400Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.151",
              "Zact": "290.807",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:26.784423Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.715",
              "Zact": "290.203",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:26.947755Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.541",
              "Zact": "289.596",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:27.119289Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.924",
              "Zact": "289.574",
              "S1load": "5",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:27.446345Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.66",
              "Zact": "289.422",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:27.610452Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.43",
              "Zact": "289.068",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:27.773456Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.043",
              "Zact": "288.707",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:27.936572Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.294",
              "Zact": "288.33",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:28.100588Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.312",
              "Zact": "287.756",
              "S1load": "5",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:28.264498Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.196",
              "Zact": "273.796",
              "S1load": "8",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:31.704787Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.529",
              "Zact": "273.804",
              "S1load": "4",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:31.868970Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.79",
              "Zact": "274.008",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:32.032986Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.777",
              "Zact": "274.45",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:32.196045Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.321",
              "Zact": "275.054",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:32.359965Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "102.395",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:32.524071Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "111.553",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:33.341968Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126.934",
              "Zact": "352.378",
              "S1load": "30",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:33.670104Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166.934",
              "Zact": "364.543",
              "S1load": "72",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:33.833087Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "214.934",
              "Zact": "379.14",
              "S1load": "52",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:33.996104Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "254.934",
              "Zact": "391.305",
              "S1load": "23",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:34.159329Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "294.934",
              "Zact": "403.47",
              "S1load": "10",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:34.322074Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334.934",
              "Zact": "415.635",
              "S1load": "5",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:34.485321Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:34.649160Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "332",
              "Zact": "415.057",
              "S1load": "89",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:35.802530Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "292",
              "Zact": "403.791",
              "S1load": "37",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:35.965599Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "252",
              "Zact": "392.525",
              "S1load": "11",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:36.131234Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "212",
              "Zact": "381.259",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:36.294895Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "164",
              "Zact": "367.739",
              "S1load": "2",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:36.458587Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "124",
              "Zact": "356.473",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:36.623211Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:36.787260Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.139",
              "Zact": "289.147",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:38.426565Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.003",
              "Zact": "289.079",
              "S1load": "3",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:38.590322Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.867",
              "Zact": "289.011",
              "S1load": "5",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:38.754340Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.732",
              "Zact": "288.943",
              "S1load": "6",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:38.918585Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.569",
              "Zact": "288.862",
              "S1load": "5",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:39.082920Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.433",
              "Zact": "288.794",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:39.246371Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.297",
              "Zact": "288.726",
              "S1load": "6",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:39.411505Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.162",
              "Zact": "288.658",
              "S1load": "7",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:39.575294Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.026",
              "Zact": "288.59",
              "S1load": "8",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:39.739235Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.859",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:39.903236Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "110.165",
              "Zact": "352.577",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:48.946791Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "150.165",
              "Zact": "363.843",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:49.109816Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "190.165",
              "Zact": "375.109",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:49.272774Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "230.165",
              "Zact": "386.375",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:49.435803Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "270.165",
              "Zact": "397.641",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:49.605747Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "310.165",
              "Zact": "408.907",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:49.769864Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:40:49.933278Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "310",
              "Zact": "397.4",
              "S1load": "75",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:52.755021Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "270",
              "Zact": "373.4",
              "S1load": "22",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:52.919067Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "230",
              "Zact": "369.253",
              "S1load": "7",
              "part_count": "448",
              "TIME": "2021-03-04T04:40:53.082394Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "16.155",
              "Zact": "371.554",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:05.392856Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "56.155",
              "Zact": "377.308",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:05.555814Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.155",
              "Zact": "383.062",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:05.721870Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "136.155",
              "Zact": "388.815",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:05.884979Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "176.155",
              "Zact": "394.569",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:06.048887Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "216.155",
              "Zact": "400.323",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:06.212886Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "256.155",
              "Zact": "406.077",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:06.377988Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "304.155",
              "Zact": "412.981",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:06.540918Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "344.155",
              "Zact": "418.735",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:06.703945Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "448",
              "TIME": "2021-03-04T04:41:06.866916Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312",
              "Zact": "408.66",
              "S1load": "106",
              "part_count": "449",
              "TIME": "2021-03-04T04:42:21.971623Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272",
              "Zact": "396.495",
              "S1load": "75",
              "part_count": "449",
              "TIME": "2021-03-04T04:42:22.135652Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "232",
              "Zact": "384.331",
              "S1load": "18",
              "part_count": "449",
              "TIME": "2021-03-04T04:42:22.299781Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "192",
              "Zact": "372.166",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:42:22.466552Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "152",
              "Zact": "360.001",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:42:22.631124Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.934",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "449",
              "TIME": "2021-03-04T04:42:22.794081Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "105.862",
              "Zact": "317.36",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:23.449995Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.462",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:23.613831Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.262",
              "Zact": "316.548",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:32.967340Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.262",
              "Zact": "326.859",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:33.621342Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.862",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:33.786985Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "109.786",
              "Zact": "341.496",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:33.950933Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.612",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:34.114951Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.272",
              "Zact": "273.946",
              "S1load": "8",
              "part_count": "449",
              "TIME": "2021-03-04T04:42:53.625692Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.993",
              "Zact": "274.512",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:54.115469Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.993",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:42:54.607869Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.607",
              "Zact": "289.692",
              "S1load": "8",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:07.580256Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.151",
              "Zact": "289.42",
              "S1load": "5",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:07.742864Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.695",
              "Zact": "289.148",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:07.906886Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.238",
              "Zact": "288.877",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:08.069895Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.612",
              "Zact": "288.69",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:08.235045Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.288",
              "Zact": "289.434",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:08.406556Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.316",
              "Zact": "289.746",
              "S1load": "9",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:21.866835Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.168",
              "Zact": "290.312",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:22.359471Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.555",
              "Zact": "290.708",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:22.524559Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.911",
              "Zact": "292.436",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:34.658541Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.342",
              "Zact": "292.03",
              "S1load": "9",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:34.822483Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.667",
              "Zact": "291.681",
              "S1load": "7",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:34.993367Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.992",
              "Zact": "291.333",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:35.157492Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.316",
              "Zact": "290.985",
              "S1load": "5",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:35.320511Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.641",
              "Zact": "290.637",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:35.484554Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.966",
              "Zact": "290.289",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:35.647580Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.291",
              "Zact": "289.941",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:35.810594Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.462",
              "Zact": "289.757",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:35.975293Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.95",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:36.139367Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.496",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:48.115190Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.264",
              "Zact": "292.932",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:48.277056Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.996",
              "Zact": "292.818",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:48.440114Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.623",
              "Zact": "292.599",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:43:48.605145Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.887",
              "Zact": "292.452",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:48.767123Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.575",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:43:48.931169Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:00.905977Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.443",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:01.561228Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.615",
              "Zact": "294.079",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:01.725262Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.683",
              "Zact": "292.946",
              "S1load": "9",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:13.680283Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.868",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:14.334684Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.48",
              "Zact": "317.456",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:14.660854Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.317",
              "Zact": "316.78",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:14.988833Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.774",
              "Zact": "316.508",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:15.152884Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.467",
              "Zact": "316.237",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:15.316719Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.01",
              "Zact": "315.965",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:15.479846Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.553",
              "Zact": "315.694",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:15.642919Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.097",
              "Zact": "315.422",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:15.806948Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.64",
              "Zact": "315.151",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:15.971275Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.162",
              "Zact": "314.89",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:16.135178Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.293",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:16.299370Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.862",
              "Zact": "317.855",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:16.627974Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "122.934",
              "Zact": "351.162",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:17.280016Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "162.934",
              "Zact": "363.326",
              "S1load": "56",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:17.442899Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "202.934",
              "Zact": "375.491",
              "S1load": "44",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:17.608046Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "250.934",
              "Zact": "390.089",
              "S1load": "21",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:17.773022Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "290.934",
              "Zact": "402.253",
              "S1load": "10",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:17.937076Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "330.934",
              "Zact": "414.418",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:18.100088Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:18.263064Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "334",
              "Zact": "415.351",
              "S1load": "50",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:18.753074Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "294",
              "Zact": "403.186",
              "S1load": "121",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:18.916366Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "254",
              "Zact": "391.021",
              "S1load": "82",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:19.079178Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "206",
              "Zact": "376.423",
              "S1load": "24",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:19.242167Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "166",
              "Zact": "364.259",
              "S1load": "8",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:19.407200Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "126",
              "Zact": "352.094",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:19.570150Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.934",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:19.734167Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.862",
              "Zact": "318.49",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:20.387497Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.67",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:20.551360Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.785",
              "Zact": "317.467",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:20.716300Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.394",
              "Zact": "316.879",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:20.879169Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.427",
              "Zact": "316.465",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:21.043058Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "71.706",
              "Zact": "316.295",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:21.207188Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.638",
              "Zact": "316.254",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:21.371233Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.346",
              "Zact": "316.073",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:21.539253Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.179",
              "Zact": "315.668",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:21.701217Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.123",
              "Zact": "315.197",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:21.864211Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.714",
              "Zact": "314.78",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:22.028241Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.862",
              "Zact": "314.388",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:22.193883Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.209",
              "Zact": "292.797",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:27.444586Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.507",
              "Zact": "292.796",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:27.608742Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.457",
              "Zact": "292.759",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:28.263681Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.304",
              "Zact": "292.541",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:28.427679Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.813",
              "Zact": "292.235",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:28.592656Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.335",
              "Zact": "291.683",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:28.756680Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.899",
              "Zact": "291.078",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:28.919643Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.462",
              "Zact": "290.474",
              "S1load": "5",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:29.087852Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.026",
              "Zact": "289.87",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:29.251022Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.01",
              "Zact": "289.596",
              "S1load": "7",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:29.415183Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.568",
              "Zact": "289.595",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:29.579826Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.344",
              "Zact": "289.508",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:29.742721Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.006",
              "Zact": "289.28",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:29.905765Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.841",
              "Zact": "288.855",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:30.068743Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.217",
              "Zact": "288.505",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:30.233772Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.312",
              "Zact": "288.055",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:30.396793Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.598",
              "Zact": "273.796",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:33.840062Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.246",
              "Zact": "273.884",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:34.165965Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.38",
              "Zact": "274.227",
              "S1load": "3",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:34.330101Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.139",
              "Zact": "274.769",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:34.495102Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.395",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:34.659636Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108.934",
              "Zact": "346.904",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:35.806909Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "148.934",
              "Zact": "359.069",
              "S1load": "59",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:35.969151Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "188.934",
              "Zact": "371.233",
              "S1load": "73",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:36.133119Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "228.934",
              "Zact": "383.398",
              "S1load": "33",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:36.297173Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "276.934",
              "Zact": "397.996",
              "S1load": "15",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:36.460142Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "316.934",
              "Zact": "410.16",
              "S1load": "7",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:36.625180Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:36.788177Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "308",
              "Zact": "408.297",
              "S1load": "76",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:38.098312Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "268",
              "Zact": "397.031",
              "S1load": "23",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:38.261205Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "228",
              "Zact": "385.765",
              "S1load": "7",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:38.425295Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "188",
              "Zact": "374.499",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:38.588313Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "148",
              "Zact": "363.233",
              "S1load": "1",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:38.752322Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "108",
              "Zact": "351.967",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:38.915420Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": "0",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:39.078317Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.057",
              "Zact": "289.106",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:40.714761Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.922",
              "Zact": "289.038",
              "S1load": "4",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:40.877446Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.786",
              "Zact": "288.971",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:41.041471Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.65",
              "Zact": "288.903",
              "S1load": "7",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:41.204563Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.515",
              "Zact": "288.835",
              "S1load": "8",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:41.367473Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.379",
              "Zact": "288.767",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:41.533485Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.243",
              "Zact": "288.699",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:41.696399Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.107",
              "Zact": "288.631",
              "S1load": "7",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:41.859439Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.972",
              "Zact": "288.563",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:42.023539Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.744",
              "Zact": "288.56",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:42.187274Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "291.11",
              "S1load": "2",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:50.538349Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "118.165",
              "Zact": "354.83",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:51.195474Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "158.165",
              "Zact": "366.096",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:51.359371Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "198.165",
              "Zact": "377.362",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:51.522230Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "238.165",
              "Zact": "388.628",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:51.685436Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "278.165",
              "Zact": "399.894",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:51.849460Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "326.165",
              "Zact": "413.413",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:52.013477Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:44:52.176680Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "312",
              "Zact": "398.6",
              "S1load": "62",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:54.941397Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "272",
              "Zact": "374.6",
              "S1load": "19",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:55.104428Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "232",
              "Zact": "369.253",
              "S1load": "6",
              "part_count": "449",
              "TIME": "2021-03-04T04:44:55.268334Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "16.155",
              "Zact": "371.554",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:07.561725Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "56.155",
              "Zact": "377.308",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:07.726477Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.155",
              "Zact": "383.062",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:07.889330Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "136.155",
              "Zact": "388.815",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:08.052438Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "176.155",
              "Zact": "394.569",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:08.216163Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "216.155",
              "Zact": "400.323",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:08.380186Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "256.155",
              "Zact": "406.077",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:08.543864Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "296.155",
              "Zact": "411.83",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:08.707906Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "336.155",
              "Zact": "417.584",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:08.870626Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "449",
              "TIME": "2021-03-04T04:45:09.034317Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "338",
              "Zact": "416.567",
              "S1load": "71",
              "part_count": "450",
              "TIME": "2021-03-04T04:45:58.773447Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "298",
              "Zact": "404.402",
              "S1load": "122",
              "part_count": "450",
              "TIME": "2021-03-04T04:45:58.944944Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "258",
              "Zact": "392.238",
              "S1load": "39",
              "part_count": "450",
              "TIME": "2021-03-04T04:45:59.108347Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "218",
              "Zact": "380.073",
              "S1load": "11",
              "part_count": "450",
              "TIME": "2021-03-04T04:45:59.271437Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "178",
              "Zact": "367.908",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:45:59.434510Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "130",
              "Zact": "353.31",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:45:59.597545Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.934",
              "Zact": "346.296",
              "S1load": "1",
              "part_count": "450",
              "TIME": "2021-03-04T04:45:59.760538Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "101.462",
              "Zact": "316.296",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:00.422036Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "57.262",
              "Zact": "316.298",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:09.766740Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.262",
              "Zact": "333.909",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:10.585226Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "113.862",
              "Zact": "346.296",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:10.751245Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "102.652",
              "Zact": "333.096",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:10.915268Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.612",
              "Zact": "320.096",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:11.078215Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.926",
              "Zact": "273.946",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:30.443164Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.993",
              "Zact": "276.912",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:31.098523Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.152",
              "Zact": "289.746",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:44.382380Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.797",
              "Zact": "289.597",
              "S1load": "6",
              "part_count": "450",
              "TIME": "2021-03-04T04:46:44.547430Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.45",
              "Zact": "289.271",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:46:44.711437Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.993",
              "Zact": "288.999",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:46:44.880211Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.537",
              "Zact": "288.727",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:46:45.045432Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.743",
              "Zact": "289.255",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:45.209426Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.288",
              "Zact": "289.434",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:45.372378Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.663",
              "Zact": "289.746",
              "S1load": "12",
              "part_count": "450",
              "TIME": "2021-03-04T04:46:58.658287Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.168",
              "Zact": "290.312",
              "S1load": "1",
              "part_count": "450",
              "TIME": "2021-03-04T04:46:59.318315Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.555",
              "Zact": "290.708",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:46:59.483308Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.058",
              "Zact": "292.323",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:11.623110Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.456",
              "Zact": "291.908",
              "S1load": "8",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:11.786151Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.781",
              "Zact": "291.559",
              "S1load": "6",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:11.951032Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.106",
              "Zact": "291.211",
              "S1load": "5",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:12.115180Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.43",
              "Zact": "290.863",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:12.279180Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.755",
              "Zact": "290.515",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:12.442089Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.08",
              "Zact": "290.167",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:12.606184Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.405",
              "Zact": "289.818",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:12.769183Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.593",
              "Zact": "290.323",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:12.934162Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "87.95",
              "Zact": "290.906",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:13.098212Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "81.612",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:25.059888Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.378",
              "Zact": "292.922",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:25.224712Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.23",
              "Zact": "292.753",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:25.389156Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.808",
              "Zact": "292.501",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:25.552236Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.018",
              "Zact": "293.017",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:25.715687Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.575",
              "Zact": "293.253",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:25.878272Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.116",
              "Zact": "292.946",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:37.849989Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.443",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:38.506812Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.615",
              "Zact": "296.479",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:38.669825Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.799",
              "Zact": "292.946",
              "S1load": "8",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:50.627743Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "79.868",
              "Zact": "293.512",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:51.118572Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.236",
              "Zact": "316.739",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:51.939950Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.693",
              "Zact": "316.468",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:52.103304Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.657",
              "Zact": "316.142",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:52.267812Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.2",
              "Zact": "315.87",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:52.430941Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.743",
              "Zact": "315.599",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:52.594637Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.287",
              "Zact": "315.327",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:52.757677Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.83",
              "Zact": "315.056",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:52.921680Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.162",
              "Zact": "314.89",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:53.085734Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "77.293",
              "Zact": "315.455",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:53.256582Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "136.934",
              "Zact": "355.419",
              "S1load": "14",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:54.247376Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "184.934",
              "Zact": "370.017",
              "S1load": "65",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:54.411786Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "224.934",
              "Zact": "382.182",
              "S1load": "34",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:54.574764Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "264.934",
              "Zact": "394.346",
              "S1load": "17",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:54.738788Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "304.934",
              "Zact": "406.511",
              "S1load": "8",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:54.901801Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "344.934",
              "Zact": "418.676",
              "S1load": "5",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:55.065809Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:55.229788Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "318",
              "Zact": "410.485",
              "S1load": "90",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:55.719811Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "270",
              "Zact": "395.887",
              "S1load": "132",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:55.882860Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "230",
              "Zact": "383.722",
              "S1load": "50",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:56.046864Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "190",
              "Zact": "371.558",
              "S1load": "15",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:56.211081Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "150",
              "Zact": "359.393",
              "S1load": "5",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:56.374882Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "110",
              "Zact": "347.228",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:56.537916Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "106.934",
              "Zact": "343.896",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:56.702063Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "110.398",
              "Zact": "319.296",
              "S1load": "1",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:57.028924Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "103.862",
              "Zact": "318.986",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:57.192953Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.67",
              "Zact": "317.896",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:57.362865Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.671",
              "Zact": "317.862",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:57.528741Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "68.97",
              "Zact": "317.217",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:57.692436Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "69.765",
              "Zact": "316.688",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:57.855290Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "70.921",
              "Zact": "316.365",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:58.020329Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "72.166",
              "Zact": "316.294",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:58.183995Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.08",
              "Zact": "316.161",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:58.352835Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "73.802",
              "Zact": "315.856",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:58.517025Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "74.745",
              "Zact": "315.385",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:58.680944Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.487",
              "Zact": "314.991",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:58.845054Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.809",
              "Zact": "314.627",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:47:59.009407Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.862",
              "Zact": "314.121",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:47:59.173291Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "75.941",
              "Zact": "292.877",
              "S1load": "7",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:04.266624Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "76.973",
              "Zact": "292.796",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:04.436653Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.143",
              "Zact": "292.789",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:05.091703Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "82.904",
              "Zact": "292.673",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:05.254462Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "83.534",
              "Zact": "292.43",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:05.418434Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.11",
              "Zact": "291.924",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:05.581493Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "84.673",
              "Zact": "291.32",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:05.744477Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.237",
              "Zact": "290.716",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:05.907435Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "85.8",
              "Zact": "290.111",
              "S1load": "5",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:06.071435Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "86.476",
              "Zact": "289.596",
              "S1load": "6",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:06.235441Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "88.886",
              "Zact": "289.578",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:06.563807Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "89.627",
              "Zact": "289.433",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:06.727855Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "90.573",
              "Zact": "288.997",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:06.890561Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.099",
              "Zact": "288.653",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:07.055630Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.307",
              "Zact": "288.269",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:07.218572Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "91.312",
              "Zact": "287.655",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:07.381592Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "92.397",
              "Zact": "273.796",
              "S1load": "9",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:10.829878Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "93.73",
              "Zact": "273.818",
              "S1load": "5",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:10.993902Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "94.962",
              "Zact": "274.062",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:11.158892Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "95.891",
              "Zact": "274.533",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:11.322917Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "96.358",
              "Zact": "275.153",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:11.486909Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.395",
              "Zact": "275.396",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:11.649783Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "132.934",
              "Zact": "354.203",
              "S1load": "39",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:12.799286Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "172.934",
              "Zact": "366.367",
              "S1load": "75",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:12.963285Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "212.934",
              "Zact": "378.532",
              "S1load": "45",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:13.127292Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "252.934",
              "Zact": "390.697",
              "S1load": "20",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:13.290295Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "300.934",
              "Zact": "405.295",
              "S1load": "9",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:13.454267Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "340.934",
              "Zact": "417.459",
              "S1load": "5",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:13.618089Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:13.781538Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "332",
              "Zact": "415.057",
              "S1load": "90",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:14.931420Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "292",
              "Zact": "403.791",
              "S1load": "46",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:15.094433Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "252",
              "Zact": "392.525",
              "S1load": "14",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:15.259484Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "212",
              "Zact": "381.259",
              "S1load": "4",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:15.422435Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "172",
              "Zact": "369.992",
              "S1load": "1",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:15.587413Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "132",
              "Zact": "358.726",
              "S1load": "0",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:15.750054Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "100.165",
              "Zact": "349.76",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:15.914078Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.139",
              "Zact": "289.147",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:17.553245Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "99.003",
              "Zact": "289.079",
              "S1load": "3",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:17.716314Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.867",
              "Zact": "289.011",
              "S1load": "5",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:17.879286Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.732",
              "Zact": "288.943",
              "S1load": "7",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:18.044328Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.596",
              "Zact": "288.875",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:18.208346Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.46",
              "Zact": "288.808",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:18.373469Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.324",
              "Zact": "288.74",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:18.539397Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.162",
              "Zact": "288.658",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:18.703920Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "98.026",
              "Zact": "288.59",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:18.869006Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "97.859",
              "Zact": "288.56",
              "S1load": "8",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:19.031658Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "102.165",
              "Zact": "350.323",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:28.055016Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "142.165",
              "Zact": "361.589",
              "S1load": "1",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:28.219012Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "182.165",
              "Zact": "372.855",
              "S1load": "2",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:28.382375Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "222.165",
              "Zact": "384.122",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:28.547194Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "262.165",
              "Zact": "395.388",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:28.710160Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "302.165",
              "Zact": "406.654",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:28.872878Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:29.035924Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "330",
              "Zact": "409.4",
              "S1load": "135",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:31.798140Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "290",
              "Zact": "385.4",
              "S1load": "41",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:31.961243Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "250",
              "Zact": "369.253",
              "S1load": "10",
              "part_count": "450",
              "TIME": "2021-03-04T04:48:32.124772Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "38.155",
              "Zact": "374.719",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:44.587969Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "78.155",
              "Zact": "380.473",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:44.751997Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "118.155",
              "Zact": "386.226",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:44.915987Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "158.155",
              "Zact": "391.98",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:45.079904Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "198.155",
              "Zact": "397.734",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:45.243279Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "238.155",
              "Zact": "403.487",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:45.407287Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "278.155",
              "Zact": "409.241",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:45.571323Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "318.155",
              "Zact": "414.995",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:45.734297Z"
            },
            {
              "MID": "Lynx220LSY",
              "Xact": "346",
              "Zact": "419",
              "S1load": null,
              "part_count": "450",
              "TIME": "2021-03-04T04:48:45.898385Z"
            }
          ]
        ],
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
				  yAxes: [{
					ticks: {
						min: 0,
					  stepSize :0.2,
						fontSize : 14,
					}
				}]
			}
        }
      }
    },
    mounted(){},
    methods: {
      //버튼 
      timeSerchBtn:function(){
        let itemList =[...this.list[0]];
        itemList.forEach(day => {    
          //시간 UTC 형식 변환 
          //형식 : 2021-03-04 03:25:59
          const gmtDateTime = moment.utc(day.TIME).format('hh:ss');
          console.log(gmtDateTime);
        });
      }
    },
    created(){

        console.log([this.list[0]]) 
  
        this.list[0].forEach(d => {   
      
          //시간 UTC 형식 변환 
          //형식 : 2021-03-04 03:25:59
          const date = moment.utc(d.TIME).format('hh:mm');

          const {
            MID,
            Xact,
            Zact,
            S1load,
            part_count,
            TIME
          } = d;
          this.arrPart_Count.push({date, total:Xact,total2:Zact});
          
        });

    }
}
</script>
