"use client";
import React from "react";
import { useState } from "react";
import TrainDetails from "../../components/Train";
const Page = () => {
  const [trainno, setTrainno] = useState("");
  const [dayno, setDayno] = useState("");
  const [data, setData] = useState(null);
  console.log(process.env.NEXT_PUBLIC_API);
  const tdata={
    "status": true,
    "message": "Success",
    "timestamp": 1710766664997,
    "data": {
      "delay": 21,
      "new_alert_msg": "",
      "instance_alert": 0,
      "std": "2024-03-18 11:20",
      "status_as_of": "As of few seconds ago",
      "at_dstn": false,
      "etd": "18:26",
      "source": "SMVB",
      "ahead_distance": 2,
      "notification_date": "2024-03-18",
      "eta": "18:26",
      "avg_speed": 0,
      "update_time": "2024-03-18T18:28:00Z",
      "run_days": "MON,TUE,THU,FRI,SUN",
      "distance_from_source": 436,
      "new_alert_id": 0,
      "train_name": "Duronto Express",
      "user_id": 0,
      "status_as_of_min": 0,
      "train_number": "12246",
      "previous_stations": [
        {
          "stoppage_number": 1,
          "std": "11:20",
          "station_name": "SMVT BENGALURU(BENGALURU)",
          "station_lng": 77.641798,
          "station_lat": 13.000493,
          "station_code": "SMVB",
          "state_code": null,
          "sta": "11:20",
          "smart_city_id": null,
          "si_no": 1,
          "platform_number": 1,
          "non_stops": [
            {
              "std": "",
              "station_name": "BAIYYAPPANAHALLI YARD CABIN",
              "station_code": "BYPY",
              "state_code": "KA",
              "sta": "",
              "si_no": 2,
              "distance_from_source": 2
            },
            {
              "std": "",
              "station_name": "BAIYYAPPANAHALI",
              "station_code": "BYPL",
              "state_code": "KA",
              "sta": "",
              "si_no": 3,
              "distance_from_source": 5
            },
            {
              "std": "",
              "station_name": "BAIYYAPPANAHALLI CABIN",
              "station_code": "BPHI",
              "state_code": "KA",
              "sta": "",
              "si_no": 4,
              "distance_from_source": 6
            },
            {
              "std": "",
              "station_name": "KRISHNARAJAPURAM",
              "station_code": "KJM",
              "state_code": "KA",
              "sta": "",
              "si_no": 5,
              "distance_from_source": 8
            },
            {
              "std": "",
              "station_name": "HOODI HALT",
              "station_code": "HDIH",
              "state_code": "KA",
              "sta": "",
              "si_no": 6,
              "distance_from_source": 15
            },
            {
              "std": "",
              "station_name": "WHITEFIELD PANEL CABIN",
              "station_code": "WHPC",
              "state_code": null,
              "sta": "",
              "si_no": 7,
              "distance_from_source": 16
            },
            {
              "std": "",
              "station_name": "WHITE FIELD SATELLITE",
              "station_code": "SGWF",
              "state_code": "KA",
              "sta": "",
              "si_no": 8,
              "distance_from_source": 17
            },
            {
              "std": "",
              "station_name": "WHITEFIELD",
              "station_code": "WFD",
              "state_code": "KA",
              "sta": "",
              "si_no": 9,
              "distance_from_source": 20
            },
            {
              "std": "",
              "station_name": "DEVANGONTHI",
              "station_code": "DKN",
              "state_code": "KA",
              "sta": "",
              "si_no": 10,
              "distance_from_source": 27
            },
            {
              "std": "",
              "station_name": "MALUR",
              "station_code": "MLO",
              "state_code": "KA",
              "sta": "",
              "si_no": 11,
              "distance_from_source": 39
            },
            {
              "std": "",
              "station_name": "BYATRAYANHALLI",
              "station_code": "BFW",
              "state_code": "KA",
              "sta": "",
              "si_no": 12,
              "distance_from_source": 44
            },
            {
              "std": "",
              "station_name": "TYAKAL",
              "station_code": "TCL",
              "state_code": "KA",
              "sta": "",
              "si_no": 13,
              "distance_from_source": 53
            },
            {
              "std": "",
              "station_name": "MARALAHALLI",
              "station_code": "MZV",
              "state_code": "KA",
              "sta": "",
              "si_no": 14,
              "distance_from_source": 57
            },
            {
              "std": "",
              "station_name": "BANGARAPET",
              "station_code": "BWT",
              "state_code": "KA",
              "sta": "",
              "si_no": 15,
              "distance_from_source": 65
            },
            {
              "std": "",
              "station_name": "VARADAPUR",
              "station_code": "VRDP",
              "state_code": "KA",
              "sta": "",
              "si_no": 16,
              "distance_from_source": 72
            },
            {
              "std": "",
              "station_name": "KAMASAMUDRAM",
              "station_code": "KSM",
              "state_code": "KA",
              "sta": "",
              "si_no": 17,
              "distance_from_source": 77
            },
            {
              "std": "",
              "station_name": "BISANATTAM",
              "station_code": "BSM",
              "state_code": "KA",
              "sta": "",
              "si_no": 18,
              "distance_from_source": 83
            },
            {
              "std": "",
              "station_name": "GUDUPULLI",
              "station_code": "GDP",
              "state_code": "AP",
              "sta": "",
              "si_no": 19,
              "distance_from_source": 89
            },
            {
              "std": "",
              "station_name": "KUPPAM",
              "station_code": "KPN",
              "state_code": "AP",
              "sta": "",
              "si_no": 20,
              "distance_from_source": 98
            },
            {
              "std": "",
              "station_name": "MULANUR",
              "station_code": "MAR",
              "state_code": "AP",
              "sta": "",
              "si_no": 21,
              "distance_from_source": 110
            },
            {
              "std": "",
              "station_name": "PATCHUR",
              "station_code": "PU",
              "state_code": "TN",
              "sta": "",
              "si_no": 22,
              "distance_from_source": 120
            },
            {
              "std": "",
              "station_name": "SOMANAYAKKANPATTI",
              "station_code": "SKPT",
              "state_code": "TN",
              "sta": "",
              "si_no": 23,
              "distance_from_source": 128
            },
            {
              "std": "",
              "station_name": "JOLARPETTAI",
              "station_code": "JTJ",
              "state_code": "TN",
              "sta": "",
              "si_no": 24,
              "distance_from_source": 132
            },
            {
              "std": "",
              "station_name": "KETTANDAPATTI",
              "station_code": "KDY",
              "state_code": "TN",
              "sta": "",
              "si_no": 25,
              "distance_from_source": 140
            },
            {
              "std": "",
              "station_name": "VANIYAMBADI",
              "station_code": "VN",
              "state_code": "TN",
              "sta": "",
              "si_no": 26,
              "distance_from_source": 148
            },
            {
              "std": "",
              "station_name": "VINNAMANGALAM",
              "station_code": "VGM",
              "state_code": "TN",
              "sta": "",
              "si_no": 27,
              "distance_from_source": 156
            },
            {
              "std": "",
              "station_name": "AMBUR",
              "station_code": "AB",
              "state_code": "TN",
              "sta": "",
              "si_no": 28,
              "distance_from_source": 163
            },
            {
              "std": "",
              "station_name": "PACHACHAKUPAM",
              "station_code": "PCKM",
              "state_code": "TN",
              "sta": "",
              "si_no": 29,
              "distance_from_source": 169
            },
            {
              "std": "",
              "station_name": "MELPATTI",
              "station_code": "MPI",
              "state_code": "TN",
              "sta": "",
              "si_no": 30,
              "distance_from_source": 175
            },
            {
              "std": "",
              "station_name": "VALATHOOR",
              "station_code": "VLT",
              "state_code": "TN",
              "sta": "",
              "si_no": 31,
              "distance_from_source": 181
            },
            {
              "std": "",
              "station_name": "MELALATHUR",
              "station_code": "MEH",
              "state_code": "TN",
              "sta": "",
              "si_no": 32,
              "distance_from_source": 186
            },
            {
              "std": "",
              "station_name": "GUDIYATTAM",
              "station_code": "GYM",
              "state_code": "TN",
              "sta": "",
              "si_no": 33,
              "distance_from_source": 190
            },
            {
              "std": "",
              "station_name": "KAVANUR",
              "station_code": "KVN",
              "state_code": "TN",
              "sta": "",
              "si_no": 34,
              "distance_from_source": 196
            },
            {
              "std": "",
              "station_name": "VIRINCHIPURAM",
              "station_code": "VJ",
              "state_code": "TN",
              "sta": "",
              "si_no": 35,
              "distance_from_source": 202
            },
            {
              "std": "",
              "station_name": "LATTERI",
              "station_code": "LTI",
              "state_code": "TN",
              "sta": "",
              "si_no": 36,
              "distance_from_source": 207
            },
            {
              "std": "",
              "station_name": "KATPADI JN",
              "station_code": "KPD",
              "state_code": "TN",
              "sta": "",
              "si_no": 37,
              "distance_from_source": 214
            },
            {
              "std": "",
              "station_name": "SEVUR",
              "station_code": "SVUR",
              "state_code": "TN",
              "sta": "",
              "si_no": 38,
              "distance_from_source": 220
            },
            {
              "std": "",
              "station_name": "TIRUVALAM",
              "station_code": "THL",
              "state_code": "TN",
              "sta": "",
              "si_no": 39,
              "distance_from_source": 226
            },
            {
              "std": "",
              "station_name": "MUKUNDARAYAPURM",
              "station_code": "MCN",
              "state_code": "TN",
              "sta": "",
              "si_no": 40,
              "distance_from_source": 231
            },
            {
              "std": "",
              "station_name": "WALAJAH ROAD JN",
              "station_code": "WJR",
              "state_code": "TN",
              "sta": "",
              "si_no": 41,
              "distance_from_source": 239
            },
            {
              "std": "",
              "station_name": "MARUDALAM",
              "station_code": "MRLM",
              "state_code": "TN",
              "sta": "",
              "si_no": 42,
              "distance_from_source": 244
            },
            {
              "std": "",
              "station_name": "THALANGAI",
              "station_code": "TUG",
              "state_code": "TN",
              "sta": "",
              "si_no": 43,
              "distance_from_source": 247
            },
            {
              "std": "",
              "station_name": "SHOLINGHUR",
              "station_code": "SHU",
              "state_code": "TN",
              "sta": "",
              "si_no": 44,
              "distance_from_source": 253
            },
            {
              "std": "",
              "station_name": "MAHENDRA VADI",
              "station_code": "MDVE",
              "state_code": "TN",
              "sta": "",
              "si_no": 45,
              "distance_from_source": 257
            },
            {
              "std": "",
              "station_name": "ANAVARDIKHANPET",
              "station_code": "AVN",
              "state_code": "TN",
              "sta": "",
              "si_no": 46,
              "distance_from_source": 263
            },
            {
              "std": "",
              "station_name": "CHITTERI",
              "station_code": "CTRE",
              "state_code": "TN",
              "sta": "",
              "si_no": 47,
              "distance_from_source": 267
            },
            {
              "std": "",
              "station_name": "MELPAKKAM",
              "station_code": "MLPM",
              "state_code": "TN",
              "sta": "",
              "si_no": 48,
              "distance_from_source": 273
            },
            {
              "std": "",
              "station_name": "ARAKKONAM JN NORTH",
              "station_code": "AJJN",
              "state_code": "TN",
              "sta": "",
              "si_no": 49,
              "distance_from_source": 275
            },
            {
              "std": "",
              "station_name": "ICHCHIPUTTUR",
              "station_code": "IPT",
              "state_code": "TN",
              "sta": "",
              "si_no": 50,
              "distance_from_source": 280
            },
            {
              "std": "",
              "station_name": "TIRUTTANI",
              "station_code": "TRT",
              "state_code": "TN",
              "sta": "",
              "si_no": 51,
              "distance_from_source": 286
            },
            {
              "std": "",
              "station_name": "PONPADI",
              "station_code": "POI",
              "state_code": "TN",
              "sta": "",
              "si_no": 52,
              "distance_from_source": 293
            },
            {
              "std": "",
              "station_name": "VENKATA NARASIMHA RAJU VARI PETA",
              "station_code": "VKZ",
              "state_code": "AP",
              "sta": "",
              "si_no": 53,
              "distance_from_source": 296
            },
            {
              "std": "",
              "station_name": "NAGARI",
              "station_code": "NG",
              "state_code": "AP",
              "sta": "",
              "si_no": 54,
              "distance_from_source": 300
            },
            {
              "std": "",
              "station_name": "EKAMBARAKUPPAM",
              "station_code": "EKM",
              "state_code": "AP",
              "sta": "",
              "si_no": 55,
              "distance_from_source": 302
            },
            {
              "std": "",
              "station_name": "VEPAGUNTA",
              "station_code": "VGA",
              "state_code": "AP",
              "sta": "",
              "si_no": 56,
              "distance_from_source": 310
            },
            {
              "std": "",
              "station_name": "PUTTUR",
              "station_code": "PUT",
              "state_code": "AP",
              "sta": "",
              "si_no": 57,
              "distance_from_source": 315
            },
            {
              "std": "",
              "station_name": "TADUKU",
              "station_code": "TDK",
              "state_code": "AP",
              "sta": "",
              "si_no": 58,
              "distance_from_source": 323
            },
            {
              "std": "",
              "station_name": "SRI VENKATAPERUMAL RAJU PURAM",
              "station_code": "SVF",
              "state_code": "AP",
              "sta": "",
              "si_no": 59,
              "distance_from_source": 324
            },
            {
              "std": "",
              "station_name": "PUDI",
              "station_code": "PUDI",
              "state_code": "AP",
              "sta": "",
              "si_no": 60,
              "distance_from_source": 327
            }
          ],
          "halt": 0,
          "etd": "11:21",
          "eta": "11:21",
          "distance_from_source": 0,
          "arrival_delay": 1,
          "a_day": 0
        },
        {
          "stoppage_number": 2,
          "std": "16:45",
          "station_name": "RENIGUNTA JN",
          "station_lng": 79.50634,
          "station_lat": 13.636311,
          "station_code": "RU",
          "state_code": "AP",
          "sta": "16:40",
          "smart_city_id": null,
          "si_no": 61,
          "platform_number": 5,
          "non_stops": [
            {
              "std": "",
              "station_name": "YERPEDU",
              "station_code": "YPD",
              "state_code": "AP",
              "sta": "",
              "si_no": 62,
              "distance_from_source": 348
            },
            {
              "std": "",
              "station_name": "RACHAGUNNARI",
              "station_code": "RCG",
              "state_code": "AP",
              "sta": "",
              "si_no": 63,
              "distance_from_source": 354
            },
            {
              "std": "",
              "station_name": "SRI KALAHASTI",
              "station_code": "KHT",
              "state_code": "AP",
              "sta": "",
              "si_no": 64,
              "distance_from_source": 361
            },
            {
              "std": "",
              "station_name": "AKKURTI",
              "station_code": "AKY",
              "state_code": "AP",
              "sta": "",
              "si_no": 65,
              "distance_from_source": 365
            },
            {
              "std": "",
              "station_name": "YELLAKARU",
              "station_code": "YLK",
              "state_code": "AP",
              "sta": "",
              "si_no": 66,
              "distance_from_source": 373
            },
            {
              "std": "",
              "station_name": "YATALURU",
              "station_code": "YAL",
              "state_code": "AP",
              "sta": "",
              "si_no": 67,
              "distance_from_source": 379
            },
            {
              "std": "",
              "station_name": "VENKATAGIRI",
              "station_code": "VKI",
              "state_code": "AP",
              "sta": "",
              "si_no": 68,
              "distance_from_source": 385
            },
            {
              "std": "",
              "station_name": "NIDIGALLU",
              "station_code": "NDZ",
              "state_code": "AP",
              "sta": "",
              "si_no": 69,
              "distance_from_source": 393
            },
            {
              "std": "",
              "station_name": "VENDODU",
              "station_code": "VDD",
              "state_code": "AP",
              "sta": "",
              "si_no": 70,
              "distance_from_source": 401
            },
            {
              "std": "",
              "station_name": "KONDAGUNTA",
              "station_code": "KQA",
              "state_code": "AP",
              "sta": "",
              "si_no": 71,
              "distance_from_source": 410
            },
            {
              "std": "",
              "station_name": "GUDUR JN",
              "station_code": "GDR",
              "state_code": "AP",
              "sta": "",
              "si_no": 72,
              "distance_from_source": 420
            },
            {
              "std": "",
              "station_name": "MANUBOLU",
              "station_code": "MBL",
              "state_code": "AP",
              "sta": "",
              "si_no": 73,
              "distance_from_source": 429
            }
          ],
          "halt": 5,
          "etd": "16:53",
          "eta": "16:48",
          "distance_from_source": 338,
          "arrival_delay": 8,
          "a_day": 0
        }
      ],
      "data_from": "railyatri",
      "at_src_dstn": false,
      "ir_train_name": "Duronto Express",
      "destination": "HWH",
      "journey_time": 1770,
      "ahead_distance_text": "2 kms ahead",
      "cur_stn_sta": "18:05",
      "is_run_day": true,
      "smart_city_id": null,
      "seo_train_name": "Duronto Express",
      "current_state_code": "AP",
      "si_no": 74,
      "platform_number": 0,
      "current_location_info": [
        {
          "type": 2,
          "readable_message": "277 kilometer to vijayawada junction",
          "message": "277 kms to VIJAYAWADA JN",
          "label": "As of few seconds ago",
          "img_url": "",
          "hint": "436 kms Covered so far",
          "deeplink": ""
        },
        {
          "type": 1,
          "readable_message": "Crossed kommarapudi at 18:26",
          "message": "Crossed KOMMARAPUDI. at 18:26",
          "label": "As of few seconds ago",
          "img_url": "",
          "hint": "Delay 21m",
          "deeplink": ""
        },
        {
          "type": 3,
          "readable_message": "6 kilometer to venkatachalam",
          "message": "6 kms to VENKATACHALAM",
          "label": "As of few seconds ago",
          "img_url": "",
          "hint": "No-halt station",
          "deeplink": ""
        },
        {
          "type": 4,
          "readable_message": "2 kilometers ahead of kommarapudi",
          "message": "2 kms ahead of KOMMARAPUDI.",
          "label": "As of few seconds ago",
          "img_url": "",
          "hint": "Travelling North",
          "deeplink": ""
        }
      ],
      "cur_stn_std": "18:05",
      "total_distance": 1931,
      "success": true,
      "late_update": false,
      "current_station_name": "KOMMARAPUDI.",
      "stoppage_number": 0,
      "at_src": false,
      "related_alert": 0,
      "status": "T",
      "train_start_date": "2024-03-18",
      "a_day": 0,
      "current_station_code": "KMLP",
      "is_ry_eta": true,
      "upcoming_stations": [
        {
          "station_name": "",
          "station_lng": 0,
          "station_lat": 0,
          "station_code": "",
          "state_code": "",
          "sta": "",
          "si_no": 0,
          "platform_number": 0,
          "on_time_rating": 0,
          "non_stops": [
            {
              "std": "",
              "station_name": "VENKATACHALAM",
              "station_code": "VKT",
              "state_code": "AP",
              "sta": "",
              "si_no": 75,
              "distance_from_source": 442
            },
            {
              "std": "",
              "station_name": "VEDAYAPALEM",
              "station_code": "VDE",
              "state_code": "AP",
              "sta": "",
              "si_no": 76,
              "distance_from_source": 451
            },
            {
              "std": "",
              "station_name": "NELLORE SOUTH",
              "station_code": "NLS",
              "state_code": "AP",
              "sta": "",
              "si_no": 77,
              "distance_from_source": 456
            },
            {
              "std": "",
              "station_name": "NELLORE",
              "station_code": "NLR",
              "state_code": "AP",
              "sta": "",
              "si_no": 78,
              "distance_from_source": 458
            },
            {
              "std": "",
              "station_name": "PADUGUPADU",
              "station_code": "PGU",
              "state_code": "AP",
              "sta": "",
              "si_no": 79,
              "distance_from_source": 462
            },
            {
              "std": "",
              "station_name": "KODAVALURU",
              "station_code": "KJJ",
              "state_code": "AP",
              "sta": "",
              "si_no": 80,
              "distance_from_source": 470
            },
            {
              "std": "",
              "station_name": "TALAMANCHI",
              "station_code": "TMC",
              "state_code": "AP",
              "sta": "",
              "si_no": 81,
              "distance_from_source": 475
            },
            {
              "std": "",
              "station_name": "ALLURU ROAD",
              "station_code": "AXR",
              "state_code": "AP",
              "sta": "",
              "si_no": 82,
              "distance_from_source": 486
            },
            {
              "std": "",
              "station_name": "BITRAGUNTA",
              "station_code": "BTTR",
              "state_code": "AP",
              "sta": "",
              "si_no": 83,
              "distance_from_source": 493
            },
            {
              "std": "",
              "station_name": "S VENKTESWRPALM",
              "station_code": "SVPM",
              "state_code": "AP",
              "sta": "",
              "si_no": 84,
              "distance_from_source": 497
            },
            {
              "std": "",
              "station_name": "KAVALI",
              "station_code": "KVZ",
              "state_code": "AP",
              "sta": "",
              "si_no": 85,
              "distance_from_source": 509
            },
            {
              "std": "",
              "station_name": "TETTU",
              "station_code": "TTU",
              "state_code": "AP",
              "sta": "",
              "si_no": 86,
              "distance_from_source": 524
            },
            {
              "std": "",
              "station_name": "ULAVAPADU",
              "station_code": "UPD",
              "state_code": "AP",
              "sta": "",
              "si_no": 87,
              "distance_from_source": 538
            },
            {
              "std": "",
              "station_name": "SINGARAYAKONDA",
              "station_code": "SKM",
              "state_code": "AP",
              "sta": "",
              "si_no": 88,
              "distance_from_source": 547
            },
            {
              "std": "",
              "station_name": "TANGUTURU",
              "station_code": "TNR",
              "state_code": "AP",
              "sta": "",
              "si_no": 89,
              "distance_from_source": 557
            },
            {
              "std": "",
              "station_name": "SURAREDDIPALEM",
              "station_code": "SDM",
              "state_code": "AP",
              "sta": "",
              "si_no": 90,
              "distance_from_source": 565
            },
            {
              "std": "",
              "station_name": "ONGOLE",
              "station_code": "OGL",
              "state_code": "AP",
              "sta": "",
              "si_no": 91,
              "distance_from_source": 575
            },
            {
              "std": "",
              "station_name": "KARAVADI",
              "station_code": "KRV",
              "state_code": "AP",
              "sta": "",
              "si_no": 92,
              "distance_from_source": 584
            },
            {
              "std": "",
              "station_name": "AMMANABROLU",
              "station_code": "ANB",
              "state_code": "AP",
              "sta": "",
              "si_no": 93,
              "distance_from_source": 590
            },
            {
              "std": "",
              "station_name": "RAPARLA HALT",
              "station_code": "RPRL",
              "state_code": "AP",
              "sta": "",
              "si_no": 94,
              "distance_from_source": 593
            },
            {
              "std": "",
              "station_name": "UPPUGUNDURU",
              "station_code": "UGD",
              "state_code": "AP",
              "sta": "",
              "si_no": 95,
              "distance_from_source": 598
            },
            {
              "std": "",
              "station_name": "CHINNA GANJAM",
              "station_code": "CJM",
              "state_code": "AP",
              "sta": "",
              "si_no": 96,
              "distance_from_source": 604
            },
            {
              "std": "",
              "station_name": "KADAVAKUDURU",
              "station_code": "KVDU",
              "state_code": "AP",
              "sta": "",
              "si_no": 97,
              "distance_from_source": 608
            },
            {
              "std": "",
              "station_name": "KOTTA PANDILA PALLI",
              "station_code": "KPLL",
              "state_code": "AP",
              "sta": "",
              "si_no": 98,
              "distance_from_source": 613
            },
            {
              "std": "",
              "station_name": "VETAPALEMU",
              "station_code": "VTM",
              "state_code": "AP",
              "sta": "",
              "si_no": 99,
              "distance_from_source": 616
            },
            {
              "std": "",
              "station_name": "JANDRAPETA",
              "station_code": "JAQ",
              "state_code": "AP",
              "sta": "",
              "si_no": 100,
              "distance_from_source": 621
            },
            {
              "std": "",
              "station_name": "CHIRALA",
              "station_code": "CLX",
              "state_code": "AP",
              "sta": "",
              "si_no": 101,
              "distance_from_source": 624
            },
            {
              "std": "",
              "station_name": "IPURUPALEM HALT",
              "station_code": "IPPN",
              "state_code": "AP",
              "sta": "",
              "si_no": 102,
              "distance_from_source": 628
            },
            {
              "std": "",
              "station_name": "IPURUPALEM",
              "station_code": "IPPM",
              "state_code": "AP",
              "sta": "",
              "si_no": 103,
              "distance_from_source": 628
            },
            {
              "std": "",
              "station_name": "STUARTPURAM",
              "station_code": "SPF",
              "state_code": "AP",
              "sta": "",
              "si_no": 104,
              "distance_from_source": 631
            },
            {
              "std": "",
              "station_name": "BAPATLA",
              "station_code": "BPP",
              "state_code": "AP",
              "sta": "",
              "si_no": 105,
              "distance_from_source": 639
            },
            {
              "std": "",
              "station_name": "APPIKATLA",
              "station_code": "APL",
              "state_code": "AP",
              "sta": "",
              "si_no": 106,
              "distance_from_source": 648
            },
            {
              "std": "",
              "station_name": "MACHAVARAM",
              "station_code": "MCVM",
              "state_code": "AP",
              "sta": "",
              "si_no": 107,
              "distance_from_source": 655
            },
            {
              "std": "",
              "station_name": "NIDUBROLU",
              "station_code": "NDO",
              "state_code": "AP",
              "sta": "",
              "si_no": 108,
              "distance_from_source": 660
            },
            {
              "std": "",
              "station_name": "MODUKURU",
              "station_code": "MDKU",
              "state_code": "AP",
              "sta": "",
              "si_no": 109,
              "distance_from_source": 667
            },
            {
              "std": "",
              "station_name": "TSUNDURU",
              "station_code": "TSR",
              "state_code": "AP",
              "sta": "",
              "si_no": 110,
              "distance_from_source": 670
            },
            {
              "std": "",
              "station_name": "VALIVERU",
              "station_code": "VRU",
              "state_code": "AP",
              "sta": "",
              "si_no": 111,
              "distance_from_source": 675
            },
            {
              "std": "",
              "station_name": "TENALI JN",
              "station_code": "TEL",
              "state_code": "AP",
              "sta": "",
              "si_no": 112,
              "distance_from_source": 682
            },
            {
              "std": "",
              "station_name": "KOLAKALUR",
              "station_code": "KLX",
              "state_code": "AP",
              "sta": "",
              "si_no": 113,
              "distance_from_source": 688
            },
            {
              "std": "",
              "station_name": "DUGGIRALA",
              "station_code": "DIG",
              "state_code": "AP",
              "sta": "",
              "si_no": 114,
              "distance_from_source": 691
            },
            {
              "std": "",
              "station_name": "MORAMPUDI",
              "station_code": "MOD",
              "state_code": "AP",
              "sta": "",
              "si_no": 115,
              "distance_from_source": 694
            },
            {
              "std": "",
              "station_name": "CHILUVUR",
              "station_code": "CLVR",
              "state_code": "AP",
              "sta": "",
              "si_no": 116,
              "distance_from_source": 697
            },
            {
              "std": "",
              "station_name": "PEDDAVADLAPUDI",
              "station_code": "PVD",
              "state_code": "AP",
              "sta": "",
              "si_no": 117,
              "distance_from_source": 701
            },
            {
              "std": "",
              "station_name": "KOLANUKONDA",
              "station_code": "KAQ",
              "state_code": "AP",
              "sta": "",
              "si_no": 118,
              "distance_from_source": 705
            },
            {
              "std": "",
              "station_name": "KRISHNA CANAL",
              "station_code": "KCC",
              "state_code": "AP",
              "sta": "",
              "si_no": 119,
              "distance_from_source": 708
            }
          ],
          "halt": 0,
          "etd": "",
          "eta": "",
          "distance_from_source": 0,
          "distance_from_current_station_txt": "",
          "distance_from_current_station": 0,
          "arrival_delay": 0,
          "a_day": 0
        },
        {
          "stoppage_number": 3,
          "std": "22:20",
          "station_name": "VIJAYAWADA JN",
          "station_lng": 80.618448,
          "station_lat": 16.518062,
          "station_code": "BZA",
          "state_code": "AP",
          "sta": "22:10",
          "smart_city_id": null,
          "si_no": 120,
          "platform_number": 6,
          "on_time_rating": 7,
          "non_stops": [
            {
              "std": "",
              "station_name": "VIJAYAWADA YARD",
              "station_code": "BZAY",
              "state_code": "AP",
              "sta": "",
              "si_no": 121,
              "distance_from_source": 713
            },
            {
              "std": "",
              "station_name": "VIJAYAWADA BULB CABIN",
              "station_code": "VBC",
              "state_code": null,
              "sta": "",
              "si_no": 122,
              "distance_from_source": 715
            },
            {
              "std": "",
              "station_name": "VIJAYAWADA NORTH",
              "station_code": "VNC",
              "state_code": null,
              "sta": "",
              "si_no": 123,
              "distance_from_source": 715
            },
            {
              "std": "",
              "station_name": "GUNADALA",
              "station_code": "GALA",
              "state_code": "AP",
              "sta": "",
              "si_no": 124,
              "distance_from_source": 719
            },
            {
              "std": "",
              "station_name": "MUSTABADA",
              "station_code": "MBD",
              "state_code": "AP",
              "sta": "",
              "si_no": 125,
              "distance_from_source": 726
            },
            {
              "std": "",
              "station_name": "GANNAVARAM",
              "station_code": "GWM",
              "state_code": "AP",
              "sta": "",
              "si_no": 126,
              "distance_from_source": 734
            },
            {
              "std": "",
              "station_name": "PEDDA AVUTAPALE",
              "station_code": "PAVP",
              "state_code": "AP",
              "sta": "",
              "si_no": 127,
              "distance_from_source": 738
            },
            {
              "std": "",
              "station_name": "TELAPROLU",
              "station_code": "TOU",
              "state_code": "AP",
              "sta": "",
              "si_no": 128,
              "distance_from_source": 745
            },
            {
              "std": "",
              "station_name": "VIRAVALLI",
              "station_code": "VRVL",
              "state_code": "AP",
              "sta": "",
              "si_no": 129,
              "distance_from_source": 748
            },
            {
              "std": "",
              "station_name": "NUZVID",
              "station_code": "NZD",
              "state_code": "AP",
              "sta": "",
              "si_no": 130,
              "distance_from_source": 755
            },
            {
              "std": "",
              "station_name": "VATLUR",
              "station_code": "VAT",
              "state_code": "AP",
              "sta": "",
              "si_no": 131,
              "distance_from_source": 765
            },
            {
              "std": "",
              "station_name": "POWERPET",
              "station_code": "PRH",
              "state_code": "AP",
              "sta": "",
              "si_no": 132,
              "distance_from_source": 773
            },
            {
              "std": "",
              "station_name": "ELURU",
              "station_code": "EE",
              "state_code": "AP",
              "sta": "",
              "si_no": 133,
              "distance_from_source": 774
            },
            {
              "std": "",
              "station_name": "DENDULURU",
              "station_code": "DEL",
              "state_code": "AP",
              "sta": "",
              "si_no": 134,
              "distance_from_source": 784
            },
            {
              "std": "",
              "station_name": "SITAMPET",
              "station_code": "STPT",
              "state_code": "AP",
              "sta": "",
              "si_no": 135,
              "distance_from_source": 788
            },
            {
              "std": "",
              "station_name": "BHIMADOLU",
              "station_code": "BMD",
              "state_code": "AP",
              "sta": "",
              "si_no": 136,
              "distance_from_source": 793
            },
            {
              "std": "",
              "station_name": "PULLA",
              "station_code": "PUA",
              "state_code": "AP",
              "sta": "",
              "si_no": 137,
              "distance_from_source": 800
            },
            {
              "std": "",
              "station_name": "KAIKORAM",
              "station_code": "KKRM",
              "state_code": "AP",
              "sta": "",
              "si_no": 138,
              "distance_from_source": 805
            },
            {
              "std": "",
              "station_name": "CHEBROL",
              "station_code": "CEL",
              "state_code": "AP",
              "sta": "",
              "si_no": 139,
              "distance_from_source": 808
            },
            {
              "std": "",
              "station_name": "UNGUTURU",
              "station_code": "VGT",
              "state_code": "AP",
              "sta": "",
              "si_no": 140,
              "distance_from_source": 811
            },
            {
              "std": "",
              "station_name": "BADAMPUDI",
              "station_code": "BPY",
              "state_code": "AP",
              "sta": "",
              "si_no": 141,
              "distance_from_source": 817
            },
            {
              "std": "",
              "station_name": "TADEPALLIGUDEM",
              "station_code": "TDD",
              "state_code": "AP",
              "sta": "",
              "si_no": 142,
              "distance_from_source": 823
            },
            {
              "std": "",
              "station_name": "PRATTIAPADU",
              "station_code": "PTPU",
              "state_code": "AP",
              "sta": "",
              "si_no": 143,
              "distance_from_source": 829
            },
            {
              "std": "",
              "station_name": "NAVABPALEM",
              "station_code": "NBM",
              "state_code": "AP",
              "sta": "",
              "si_no": 144,
              "distance_from_source": 832
            },
            {
              "std": "",
              "station_name": "MARAMPALLI",
              "station_code": "MRPL",
              "state_code": "AP",
              "sta": "",
              "si_no": 145,
              "distance_from_source": 835
            },
            {
              "std": "",
              "station_name": "NIDADAVOLU JN",
              "station_code": "NDD",
              "state_code": "AP",
              "sta": "",
              "si_no": 146,
              "distance_from_source": 843
            },
            {
              "std": "",
              "station_name": "BRAHMANAGUDEM",
              "station_code": "BMGM",
              "state_code": "AP",
              "sta": "",
              "si_no": 147,
              "distance_from_source": 847
            },
            {
              "std": "",
              "station_name": "CHAGALLU",
              "station_code": "CU",
              "state_code": "AP",
              "sta": "",
              "si_no": 148,
              "distance_from_source": 851
            },
            {
              "std": "",
              "station_name": "PASIVEDALA",
              "station_code": "PSDA",
              "state_code": "AP",
              "sta": "",
              "si_no": 149,
              "distance_from_source": 854
            },
            {
              "std": "",
              "station_name": "KOVVUR",
              "station_code": "KVR",
              "state_code": "AP",
              "sta": "",
              "si_no": 150,
              "distance_from_source": 857
            },
            {
              "std": "",
              "station_name": "RAJAMUNDRY",
              "station_code": "RJY",
              "state_code": "AP",
              "sta": "",
              "si_no": 151,
              "distance_from_source": 864
            },
            {
              "std": "",
              "station_name": "KADIYAN",
              "station_code": "KYM",
              "state_code": "AP",
              "sta": "",
              "si_no": 152,
              "distance_from_source": 874
            },
            {
              "std": "",
              "station_name": "KESAVARAM",
              "station_code": "KSVM",
              "state_code": "AP",
              "sta": "",
              "si_no": 153,
              "distance_from_source": 879
            },
            {
              "std": "",
              "station_name": "DWARAPUDI",
              "station_code": "DWP",
              "state_code": "AP",
              "sta": "",
              "si_no": 154,
              "distance_from_source": 884
            },
            {
              "std": "",
              "station_name": "ANAPARTI",
              "station_code": "APT",
              "state_code": "AP",
              "sta": "",
              "si_no": 155,
              "distance_from_source": 888
            },
            {
              "std": "",
              "station_name": "BALABHADRAPURAM",
              "station_code": "BBPM",
              "state_code": "AP",
              "sta": "",
              "si_no": 156,
              "distance_from_source": 894
            },
            {
              "std": "",
              "station_name": "BIKKAVOLU",
              "station_code": "BVL",
              "state_code": "AP",
              "sta": "",
              "si_no": 157,
              "distance_from_source": 897
            },
            {
              "std": "",
              "station_name": "PEDABRAMADVAM",
              "station_code": "PBD",
              "state_code": "AP",
              "sta": "",
              "si_no": 158,
              "distance_from_source": 903
            },
            {
              "std": "",
              "station_name": "MEDAPADU",
              "station_code": "MPU",
              "state_code": "AP",
              "sta": "",
              "si_no": 159,
              "distance_from_source": 905
            },
            {
              "std": "",
              "station_name": "GUDAPARTI",
              "station_code": "GDPT",
              "state_code": "AP",
              "sta": "",
              "si_no": 160,
              "distance_from_source": 910
            },
            {
              "std": "",
              "station_name": "SAMALKOT JN",
              "station_code": "SLO",
              "state_code": "AP",
              "sta": "",
              "si_no": 161,
              "distance_from_source": 915
            },
            {
              "std": "",
              "station_name": "CHANDRAMPALEM",
              "station_code": "CRPM",
              "state_code": "AP",
              "sta": "",
              "si_no": 162,
              "distance_from_source": 922
            },
            {
              "std": "",
              "station_name": "PITHAPURAM",
              "station_code": "PAP",
              "state_code": "AP",
              "sta": "",
              "si_no": 163,
              "distance_from_source": 927
            },
            {
              "std": "",
              "station_name": "GOLLAPROLU",
              "station_code": "GLP",
              "state_code": "AP",
              "sta": "",
              "si_no": 164,
              "distance_from_source": 933
            },
            {
              "std": "",
              "station_name": "MALLAVARAM",
              "station_code": "MVRM",
              "state_code": "AP",
              "sta": "",
              "si_no": 165,
              "distance_from_source": 937
            },
            {
              "std": "",
              "station_name": "DURGADA GATE",
              "station_code": "DGDG",
              "state_code": "AP",
              "sta": "",
              "si_no": 166,
              "distance_from_source": 942
            },
            {
              "std": "",
              "station_name": "RAVIKAMPADU",
              "station_code": "RVD",
              "state_code": "AP",
              "sta": "",
              "si_no": 167,
              "distance_from_source": 945
            },
            {
              "std": "",
              "station_name": "ANNAVARAM",
              "station_code": "ANV",
              "state_code": "AP",
              "sta": "",
              "si_no": 168,
              "distance_from_source": 952
            },
            {
              "std": "",
              "station_name": "TIMMAPURAM",
              "station_code": "TMPM",
              "state_code": "AP",
              "sta": "",
              "si_no": 169,
              "distance_from_source": 956
            },
            {
              "std": "",
              "station_name": "HAMSAVARAM",
              "station_code": "HVM",
              "state_code": "AP",
              "sta": "",
              "si_no": 170,
              "distance_from_source": 961
            },
            {
              "std": "",
              "station_name": "TUNI",
              "station_code": "TUNI",
              "state_code": "AP",
              "sta": "",
              "si_no": 171,
              "distance_from_source": 969
            },
            {
              "std": "",
              "station_name": "GULLIPADU",
              "station_code": "GLU",
              "state_code": "AP",
              "sta": "",
              "si_no": 172,
              "distance_from_source": 981
            },
            {
              "std": "",
              "station_name": "NARSIPATNAM RD",
              "station_code": "NRP",
              "state_code": "AP",
              "sta": "",
              "si_no": 173,
              "distance_from_source": 992
            },
            {
              "std": "",
              "station_name": "REGUPALEM",
              "station_code": "REG",
              "state_code": "AP",
              "sta": "",
              "si_no": 174,
              "distance_from_source": 1001
            },
            {
              "std": "",
              "station_name": "ELLAMANCHILI",
              "station_code": "YLM",
              "state_code": "AP",
              "sta": "",
              "si_no": 175,
              "distance_from_source": 1010
            },
            {
              "std": "",
              "station_name": "NARASINGAPALLI",
              "station_code": "NASP",
              "state_code": "AP",
              "sta": "",
              "si_no": 176,
              "distance_from_source": 1017
            },
            {
              "std": "",
              "station_name": "BAYYAVARAM",
              "station_code": "BVM",
              "state_code": "AP",
              "sta": "",
              "si_no": 177,
              "distance_from_source": 1024
            },
            {
              "std": "",
              "station_name": "KASIMKOTA",
              "station_code": "KSK",
              "state_code": "AP",
              "sta": "",
              "si_no": 178,
              "distance_from_source": 1028
            },
            {
              "std": "",
              "station_name": "ANAKAPALLE",
              "station_code": "AKP",
              "state_code": "AP",
              "sta": "",
              "si_no": 179,
              "distance_from_source": 1034
            },
            {
              "std": "",
              "station_name": "THADI",
              "station_code": "THY",
              "state_code": "AP",
              "sta": "",
              "si_no": 180,
              "distance_from_source": 1040
            },
            {
              "std": "",
              "station_name": "DUVVADA",
              "station_code": "DVD",
              "state_code": "AP",
              "sta": "",
              "si_no": 181,
              "distance_from_source": 1050
            },
            {
              "std": "",
              "station_name": "JAGGAYAPALEM",
              "station_code": "JGPM",
              "state_code": null,
              "sta": "",
              "si_no": 182,
              "distance_from_source": 1058
            },
            {
              "std": "",
              "station_name": "SIMHACHALAM NORTH",
              "station_code": "SCMN",
              "state_code": "AP",
              "sta": "",
              "si_no": 183,
              "distance_from_source": 1060
            },
            {
              "std": "",
              "station_name": "PENDURTI",
              "station_code": "PDT",
              "state_code": "AP",
              "sta": "",
              "si_no": 184,
              "distance_from_source": 1067
            },
            {
              "std": "",
              "station_name": "KOTTAVALASA",
              "station_code": "KTV",
              "state_code": "AP",
              "sta": "",
              "si_no": 185,
              "distance_from_source": 1076
            },
            {
              "std": "",
              "station_name": "KANTAKAPALLE",
              "station_code": "KPL",
              "state_code": "AP",
              "sta": "",
              "si_no": 186,
              "distance_from_source": 1084
            },
            {
              "std": "",
              "station_name": "ALAMANDA",
              "station_code": "ALM",
              "state_code": "AP",
              "sta": "",
              "si_no": 187,
              "distance_from_source": 1093
            },
            {
              "std": "",
              "station_name": "KORUKONDA",
              "station_code": "KUK",
              "state_code": "AP",
              "sta": "",
              "si_no": 188,
              "distance_from_source": 1100
            }
          ],
          "halt": 10,
          "food_available": true,
          "etd": "22:20",
          "eta_a_min": 1330,
          "eta": "22:10",
          "distance_from_source": 713,
          "distance_from_current_station_txt": "Next stop 277 kms to go",
          "distance_from_current_station": 277,
          "day": 0,
          "arrival_delay": 0,
          "a_day": 0
        },
        {
          "stoppage_number": 4,
          "std": "04:30",
          "station_name": "VIZIANAGRAM JN",
          "station_lng": 83.395886,
          "station_lat": 18.111674,
          "station_code": "VZM",
          "state_code": "AP",
          "sta": "04:20",
          "smart_city_id": null,
          "si_no": 189,
          "platform_number": 4,
          "on_time_rating": 7,
          "non_stops": [
            {
              "std": "",
              "station_name": "NELLIMARLA",
              "station_code": "NML",
              "state_code": "AP",
              "sta": "",
              "si_no": 190,
              "distance_from_source": 1122
            },
            {
              "std": "",
              "station_name": "GUJJANGIVALASA",
              "station_code": "GUL",
              "state_code": "AP",
              "sta": "",
              "si_no": 191,
              "distance_from_source": 1129
            },
            {
              "std": "",
              "station_name": "GARIVIDI",
              "station_code": "GVI",
              "state_code": "AP",
              "sta": "",
              "si_no": 192,
              "distance_from_source": 1135
            },
            {
              "std": "",
              "station_name": "CHIPURUPALLE",
              "station_code": "CPP",
              "state_code": "AP",
              "sta": "",
              "si_no": 193,
              "distance_from_source": 1142
            },
            {
              "std": "",
              "station_name": "BATUVA",
              "station_code": "BTVA",
              "state_code": "AP",
              "sta": "",
              "si_no": 194,
              "distance_from_source": 1147
            },
            {
              "std": "",
              "station_name": "SIGADAM",
              "station_code": "SGDM",
              "state_code": "AP",
              "sta": "",
              "si_no": 195,
              "distance_from_source": 1155
            },
            {
              "std": "",
              "station_name": "PONDURU",
              "station_code": "PDU",
              "state_code": "AP",
              "sta": "",
              "si_no": 196,
              "distance_from_source": 1165
            },
            {
              "std": "",
              "station_name": "DUSI",
              "station_code": "DUSI",
              "state_code": "AP",
              "sta": "",
              "si_no": 197,
              "distance_from_source": 1174
            },
            {
              "std": "",
              "station_name": "SRIKAKULAM ROAD",
              "station_code": "CHE",
              "state_code": "AP",
              "sta": "",
              "si_no": 198,
              "distance_from_source": 1181
            },
            {
              "std": "",
              "station_name": "URLAM",
              "station_code": "ULM",
              "state_code": "AP",
              "sta": "",
              "si_no": 199,
              "distance_from_source": 1191
            },
            {
              "std": "",
              "station_name": "TILARU",
              "station_code": "TIU",
              "state_code": "AP",
              "sta": "",
              "si_no": 200,
              "distance_from_source": 1201
            },
            {
              "std": "",
              "station_name": "HARISHCHANDRAPURAM",
              "station_code": "HCM",
              "state_code": "AP",
              "sta": "",
              "si_no": 201,
              "distance_from_source": 1206
            },
            {
              "std": "",
              "station_name": "KOTABOMMALI",
              "station_code": "KBM",
              "state_code": "AP",
              "sta": "",
              "si_no": 202,
              "distance_from_source": 1214
            },
            {
              "std": "",
              "station_name": "DINDU GOPALA PURAM HALT",
              "station_code": "DGB",
              "state_code": "AP",
              "sta": "",
              "si_no": 203,
              "distance_from_source": 1222
            },
            {
              "std": "",
              "station_name": "NAUPADA JN",
              "station_code": "NWP",
              "state_code": "AP",
              "sta": "",
              "si_no": 204,
              "distance_from_source": 1228
            },
            {
              "std": "",
              "station_name": "ROUTHPURAM HALT",
              "station_code": "RMZ",
              "state_code": "AP",
              "sta": "",
              "si_no": 205,
              "distance_from_source": 1235
            },
            {
              "std": "",
              "station_name": "PUNDI",
              "station_code": "PUN",
              "state_code": "AP",
              "sta": "",
              "si_no": 206,
              "distance_from_source": 1242
            },
            {
              "std": "",
              "station_name": "PALASA",
              "station_code": "PSA",
              "state_code": "AP",
              "sta": "",
              "si_no": 207,
              "distance_from_source": 1254
            },
            {
              "std": "",
              "station_name": "SUMMADEVI",
              "station_code": "SUDV",
              "state_code": "AP",
              "sta": "",
              "si_no": 208,
              "distance_from_source": 1261
            },
            {
              "std": "",
              "station_name": "MANDASA ROAD",
              "station_code": "MMS",
              "state_code": "AP",
              "sta": "",
              "si_no": 209,
              "distance_from_source": 1267
            },
            {
              "std": "",
              "station_name": "BARUVA",
              "station_code": "BAV",
              "state_code": "AP",
              "sta": "",
              "si_no": 210,
              "distance_from_source": 1277
            },
            {
              "std": "",
              "station_name": "SOMPETA",
              "station_code": "SPT",
              "state_code": "AP",
              "sta": "",
              "si_no": 211,
              "distance_from_source": 1286
            },
            {
              "std": "",
              "station_name": "JHADUPUDI",
              "station_code": "JPI",
              "state_code": "AP",
              "sta": "",
              "si_no": 212,
              "distance_from_source": 1292
            },
            {
              "std": "",
              "station_name": "ICHCHPURAM",
              "station_code": "IPM",
              "state_code": "AP",
              "sta": "",
              "si_no": 213,
              "distance_from_source": 1304
            },
            {
              "std": "",
              "station_name": "SURLA ROAD",
              "station_code": "SLRD",
              "state_code": "OD",
              "sta": "",
              "si_no": 214,
              "distance_from_source": 1313
            },
            {
              "std": "",
              "station_name": "GOLANTHRA",
              "station_code": "GTA",
              "state_code": "OD",
              "sta": "",
              "si_no": 215,
              "distance_from_source": 1318
            },
            {
              "std": "",
              "station_name": "BRAHMAPUR",
              "station_code": "BAM",
              "state_code": "OD",
              "sta": "",
              "si_no": 216,
              "distance_from_source": 1327
            },
            {
              "std": "",
              "station_name": "JAGAN NATHAPUR",
              "station_code": "JNP",
              "state_code": "OD",
              "sta": "",
              "si_no": 217,
              "distance_from_source": 1336
            },
            {
              "std": "",
              "station_name": "NARASIMHAPURA",
              "station_code": "NRSP",
              "state_code": "OD",
              "sta": "",
              "si_no": 218,
              "distance_from_source": 1345
            },
            {
              "std": "",
              "station_name": "CHATRAPUR",
              "station_code": "CAP",
              "state_code": "OD",
              "sta": "",
              "si_no": 219,
              "distance_from_source": 1349
            },
            {
              "std": "",
              "station_name": "CHATRAPUR COURT",
              "station_code": "CAPC",
              "state_code": "OD",
              "sta": "",
              "si_no": 220,
              "distance_from_source": 1350
            },
            {
              "std": "",
              "station_name": "GANJAM",
              "station_code": "GAM",
              "state_code": "OD",
              "sta": "",
              "si_no": 221,
              "distance_from_source": 1358
            },
            {
              "std": "",
              "station_name": "HUMMA",
              "station_code": "HMA",
              "state_code": "OD",
              "sta": "",
              "si_no": 222,
              "distance_from_source": 1364
            },
            {
              "std": "",
              "station_name": "RAMBHA",
              "station_code": "RBA",
              "state_code": "OD",
              "sta": "",
              "si_no": 223,
              "distance_from_source": 1375
            },
            {
              "std": "",
              "station_name": "KHALLIKOT",
              "station_code": "KIT",
              "state_code": "OD",
              "sta": "",
              "si_no": 224,
              "distance_from_source": 1386
            },
            {
              "std": "",
              "station_name": "KALIJAI",
              "station_code": "KLJI",
              "state_code": "OD",
              "sta": "",
              "si_no": 225,
              "distance_from_source": 1391
            },
            {
              "std": "",
              "station_name": "CHILKA",
              "station_code": "CLKA",
              "state_code": "OD",
              "sta": "",
              "si_no": 226,
              "distance_from_source": 1396
            },
            {
              "std": "",
              "station_name": "BALUGAON",
              "station_code": "BALU",
              "state_code": "OD",
              "sta": "",
              "si_no": 227,
              "distance_from_source": 1402
            },
            {
              "std": "",
              "station_name": "SOLARI",
              "station_code": "SLZ",
              "state_code": "OD",
              "sta": "",
              "si_no": 228,
              "distance_from_source": 1410
            },
            {
              "std": "",
              "station_name": "GANGADHARPUR",
              "station_code": "GNGD",
              "state_code": "OD",
              "sta": "",
              "si_no": 229,
              "distance_from_source": 1415
            },
            {
              "std": "",
              "station_name": "KUHURI",
              "station_code": "KUU",
              "state_code": "OD",
              "sta": "",
              "si_no": 230,
              "distance_from_source": 1423
            },
            {
              "std": "",
              "station_name": "KALUPARA GHAT",
              "station_code": "KAPG",
              "state_code": "OD",
              "sta": "",
              "si_no": 231,
              "distance_from_source": 1430
            },
            {
              "std": "",
              "station_name": "MUKETASHWAR",
              "station_code": "MKTP",
              "state_code": "OD",
              "sta": "",
              "si_no": 232,
              "distance_from_source": 1434
            },
            {
              "std": "",
              "station_name": "BHUSANDPUR",
              "station_code": "BSDP",
              "state_code": "OD",
              "sta": "",
              "si_no": 233,
              "distance_from_source": 1440
            },
            {
              "std": "",
              "station_name": "NIRAKARPUR",
              "station_code": "NKP",
              "state_code": "OD",
              "sta": "",
              "si_no": 234,
              "distance_from_source": 1447
            },
            {
              "std": "",
              "station_name": "GOLABAI",
              "station_code": "GLBA",
              "state_code": "OD",
              "sta": "",
              "si_no": 235,
              "distance_from_source": 1451
            },
            {
              "std": "",
              "station_name": "TAPANG",
              "station_code": "TAP",
              "state_code": "OD",
              "sta": "",
              "si_no": 236,
              "distance_from_source": 1455
            },
            {
              "std": "",
              "station_name": "DHAULIMUHAN",
              "station_code": "DLMH",
              "state_code": "OD",
              "sta": "",
              "si_no": 237,
              "distance_from_source": 1459
            },
            {
              "std": "",
              "station_name": "KAIPADA ROAD",
              "station_code": "KPXR",
              "state_code": "OD",
              "sta": "",
              "si_no": 238,
              "distance_from_source": 1464
            },
            {
              "std": "",
              "station_name": "ARGUL",
              "station_code": "ARGL",
              "state_code": "OD",
              "sta": "",
              "si_no": 239,
              "distance_from_source": 1468
            },
            {
              "std": "",
              "station_name": "KHURDA ROAD JN",
              "station_code": "KUR",
              "state_code": "OD",
              "sta": "",
              "si_no": 240,
              "distance_from_source": 1473
            },
            {
              "std": "",
              "station_name": "RETANG",
              "station_code": "RTN",
              "state_code": "OD",
              "sta": "",
              "si_no": 241,
              "distance_from_source": 1481
            },
            {
              "std": "",
              "station_name": "SARKANTRA",
              "station_code": "SRKT",
              "state_code": "OD",
              "sta": "",
              "si_no": 242,
              "distance_from_source": 1485
            },
            {
              "std": "",
              "station_name": "LINGARAJ TEMPLE ROAD",
              "station_code": "LGTR",
              "state_code": "OD",
              "sta": "",
              "si_no": 243,
              "distance_from_source": 1488
            }
          ],
          "halt": 10,
          "food_available": false,
          "etd": "04:30",
          "eta_a_min": 1700,
          "eta": "04:20",
          "distance_from_source": 1111,
          "distance_from_current_station_txt": "Next stop 675 kms to go",
          "distance_from_current_station": 675,
          "day": 1,
          "arrival_delay": 0,
          "a_day": 1
        },
        {
          "stoppage_number": 5,
          "std": "09:20",
          "station_name": "BHUBANESWAR",
          "station_lng": 85.842705,
          "station_lat": 20.265498,
          "station_code": "BBS",
          "state_code": "OD",
          "sta": "09:10",
          "smart_city_id": null,
          "si_no": 244,
          "platform_number": 3,
          "on_time_rating": 4,
          "non_stops": [
            {
              "std": "",
              "station_name": "BANI BIHAR",
              "station_code": "BNBH",
              "state_code": "OD",
              "sta": "",
              "si_no": 245,
              "distance_from_source": 1495
            },
            {
              "std": "",
              "station_name": "MANCHESWAR",
              "station_code": "MCS",
              "state_code": "OD",
              "sta": "",
              "si_no": 246,
              "distance_from_source": 1499
            },
            {
              "std": "",
              "station_name": "PATIA HALT",
              "station_code": "PTAB",
              "state_code": "OD",
              "sta": "",
              "si_no": 247,
              "distance_from_source": 1502
            },
            {
              "std": "",
              "station_name": "BHUBANESWAR NEW",
              "station_code": "BBSN",
              "state_code": "OD",
              "sta": "",
              "si_no": 248,
              "distance_from_source": 1506
            },
            {
              "std": "",
              "station_name": "BARANG",
              "station_code": "BRAG",
              "state_code": "OD",
              "sta": "",
              "si_no": 249,
              "distance_from_source": 1508
            },
            {
              "std": "",
              "station_name": "GOPALPUR BALKDA",
              "station_code": "GBK",
              "state_code": "OD",
              "sta": "",
              "si_no": 250,
              "distance_from_source": 1515
            },
            {
              "std": "",
              "station_name": "KATHA JORI",
              "station_code": "KTJI",
              "state_code": "OD",
              "sta": "",
              "si_no": 251,
              "distance_from_source": 1518
            },
            {
              "std": "",
              "station_name": "CUTTACK",
              "station_code": "CTC",
              "state_code": "OD",
              "sta": "",
              "si_no": 252,
              "distance_from_source": 1520
            },
            {
              "std": "",
              "station_name": "KENDRAPARA ROAD",
              "station_code": "KNPR",
              "state_code": "OD",
              "sta": "",
              "si_no": 253,
              "distance_from_source": 1524
            },
            {
              "std": "",
              "station_name": "NERGUNDI",
              "station_code": "NRG",
              "state_code": "OD",
              "sta": "",
              "si_no": 254,
              "distance_from_source": 1531
            },
            {
              "std": "",
              "station_name": "KAPILAS ROAD",
              "station_code": "KIS",
              "state_code": "OD",
              "sta": "",
              "si_no": 255,
              "distance_from_source": 1535
            },
            {
              "std": "",
              "station_name": "SRI JHADESHWAR",
              "station_code": "SJDR",
              "state_code": "OD",
              "sta": "",
              "si_no": 256,
              "distance_from_source": 1542
            },
            {
              "std": "",
              "station_name": "BYREE",
              "station_code": "BYY",
              "state_code": "OD",
              "sta": "",
              "si_no": 257,
              "distance_from_source": 1545
            },
            {
              "std": "",
              "station_name": "BARITHENGARH",
              "station_code": "BRTG",
              "state_code": "OD",
              "sta": "",
              "si_no": 258,
              "distance_from_source": 1549
            },
            {
              "std": "",
              "station_name": "DHANMANDAL",
              "station_code": "DNM",
              "state_code": "OD",
              "sta": "",
              "si_no": 259,
              "distance_from_source": 1556
            },
            {
              "std": "",
              "station_name": "HARIDASPUR",
              "station_code": "HDS",
              "state_code": "OD",
              "sta": "",
              "si_no": 260,
              "distance_from_source": 1561
            },
            {
              "std": "",
              "station_name": "NEW GARH MADHOPUR",
              "station_code": "NGMP",
              "state_code": "OD",
              "sta": "",
              "si_no": 261,
              "distance_from_source": 1571
            },
            {
              "std": "",
              "station_name": "JENAPUR",
              "station_code": "JEN",
              "state_code": "OD",
              "sta": "",
              "si_no": 262,
              "distance_from_source": 1577
            },
            {
              "std": "",
              "station_name": "BRAHMANI PH",
              "station_code": "BRMI",
              "state_code": "OD",
              "sta": "",
              "si_no": 263,
              "distance_from_source": 1581
            },
            {
              "std": "",
              "station_name": "JAKHAPURA",
              "station_code": "JKPR",
              "state_code": "OD",
              "sta": "",
              "si_no": 264,
              "distance_from_source": 1584
            },
            {
              "std": "",
              "station_name": "JAJPUR KEONJHAR ROAD",
              "station_code": "JJKR",
              "state_code": "OD",
              "sta": "",
              "si_no": 265,
              "distance_from_source": 1592
            },
            {
              "std": "",
              "station_name": "KORAI HALT",
              "station_code": "KRIH",
              "state_code": "OD",
              "sta": "",
              "si_no": 266,
              "distance_from_source": 1597
            },
            {
              "std": "",
              "station_name": "BAITARANI ROAD",
              "station_code": "BTV",
              "state_code": "OD",
              "sta": "",
              "si_no": 267,
              "distance_from_source": 1604
            },
            {
              "std": "",
              "station_name": "DULAKHAPATNA",
              "station_code": "DLPT",
              "state_code": "OD",
              "sta": "",
              "si_no": 268,
              "distance_from_source": 1609
            },
            {
              "std": "",
              "station_name": "MANJURI ROAD",
              "station_code": "MZZ",
              "state_code": "OD",
              "sta": "",
              "si_no": 269,
              "distance_from_source": 1613
            },
            {
              "std": "",
              "station_name": "KENDUAPADA",
              "station_code": "KED",
              "state_code": "OD",
              "sta": "",
              "si_no": 270,
              "distance_from_source": 1620
            },
            {
              "std": "",
              "station_name": "KAPALI ROAD",
              "station_code": "KPLD",
              "state_code": "OD",
              "sta": "",
              "si_no": 271,
              "distance_from_source": 1624
            },
            {
              "std": "",
              "station_name": "BAUDPUR",
              "station_code": "BUDR",
              "state_code": "OD",
              "sta": "",
              "si_no": 272,
              "distance_from_source": 1629
            },
            {
              "std": "",
              "station_name": "BHADRAKH",
              "station_code": "BHC",
              "state_code": "OD",
              "sta": "",
              "si_no": 273,
              "distance_from_source": 1635
            },
            {
              "std": "",
              "station_name": "RANITAL LINK CABIN",
              "station_code": "RLJC",
              "state_code": null,
              "sta": "",
              "si_no": 274,
              "distance_from_source": 1640
            },
            {
              "std": "",
              "station_name": "RANITAL",
              "station_code": "RNTL",
              "state_code": "OD",
              "sta": "",
              "si_no": 275,
              "distance_from_source": 1643
            },
            {
              "std": "",
              "station_name": "MARKONA",
              "station_code": "MKO",
              "state_code": "OD",
              "sta": "",
              "si_no": 276,
              "distance_from_source": 1649
            },
            {
              "std": "",
              "station_name": "SABIRA",
              "station_code": "SZZ",
              "state_code": "OD",
              "sta": "",
              "si_no": 277,
              "distance_from_source": 1655
            },
            {
              "std": "",
              "station_name": "SORO",
              "station_code": "SORO",
              "state_code": "OD",
              "sta": "",
              "si_no": 278,
              "distance_from_source": 1664
            },
            {
              "std": "",
              "station_name": "BAHANAGA BAZAR",
              "station_code": "BNBR",
              "state_code": "OD",
              "sta": "",
              "si_no": 279,
              "distance_from_source": 1673
            },
            {
              "std": "",
              "station_name": "PANPANA",
              "station_code": "PNPN",
              "state_code": "OD",
              "sta": "",
              "si_no": 280,
              "distance_from_source": 1677
            },
            {
              "std": "",
              "station_name": "KHANTAPARA",
              "station_code": "KHF",
              "state_code": "OD",
              "sta": "",
              "si_no": 281,
              "distance_from_source": 1682
            },
            {
              "std": "",
              "station_name": "NILGIRI ROAD",
              "station_code": "NGRD",
              "state_code": "OD",
              "sta": "",
              "si_no": 282,
              "distance_from_source": 1687
            },
            {
              "std": "",
              "station_name": "BALASORE",
              "station_code": "BLS",
              "state_code": "OD",
              "sta": "",
              "si_no": 283,
              "distance_from_source": 1697
            },
            {
              "std": "",
              "station_name": "TIKIRAPAL HALT",
              "station_code": "TKPL",
              "state_code": "OD",
              "sta": "",
              "si_no": 284,
              "distance_from_source": 1702
            },
            {
              "std": "",
              "station_name": "HALDIPADA",
              "station_code": "HIP",
              "state_code": "OD",
              "sta": "",
              "si_no": 285,
              "distance_from_source": 1709
            },
            {
              "std": "",
              "station_name": "RUPSA JN",
              "station_code": "ROP",
              "state_code": "OD",
              "sta": "",
              "si_no": 286,
              "distance_from_source": 1715
            },
            {
              "std": "",
              "station_name": "N MAYURBHANJ ROAD",
              "station_code": "NMBR",
              "state_code": "OD",
              "sta": "",
              "si_no": 287,
              "distance_from_source": 1721
            },
            {
              "std": "",
              "station_name": "BASTA",
              "station_code": "BTS",
              "state_code": "OD",
              "sta": "",
              "si_no": 288,
              "distance_from_source": 1725
            },
            {
              "std": "",
              "station_name": "AMARDA ROAD",
              "station_code": "ARD",
              "state_code": "OD",
              "sta": "",
              "si_no": 289,
              "distance_from_source": 1730
            },
            {
              "std": "",
              "station_name": "RAJGHAT HALT",
              "station_code": "RGT",
              "state_code": "OD",
              "sta": "",
              "si_no": 290,
              "distance_from_source": 1737
            },
            {
              "std": "",
              "station_name": "JALESWAR",
              "station_code": "JER",
              "state_code": "OD",
              "sta": "",
              "si_no": 291,
              "distance_from_source": 1744
            },
            {
              "std": "",
              "station_name": "LAKSHANNATH ROAD",
              "station_code": "LXD",
              "state_code": "OD",
              "sta": "",
              "si_no": 292,
              "distance_from_source": 1751
            },
            {
              "std": "",
              "station_name": "ANGUA",
              "station_code": "AGV",
              "state_code": "WB",
              "sta": "",
              "si_no": 293,
              "distance_from_source": 1757
            },
            {
              "std": "",
              "station_name": "DANTAN",
              "station_code": "DNT",
              "state_code": "WB",
              "sta": "",
              "si_no": 294,
              "distance_from_source": 1761
            },
            {
              "std": "",
              "station_name": "NIKURSINI",
              "station_code": "NSI",
              "state_code": "WB",
              "sta": "",
              "si_no": 295,
              "distance_from_source": 1770
            },
            {
              "std": "",
              "station_name": "BELDA",
              "station_code": "BLDA",
              "state_code": "WB",
              "sta": "",
              "si_no": 296,
              "distance_from_source": 1778
            },
            {
              "std": "",
              "station_name": "BAKHRABAD",
              "station_code": "VKD",
              "state_code": "WB",
              "sta": "",
              "si_no": 297,
              "distance_from_source": 1784
            },
            {
              "std": "",
              "station_name": "NARAYANGARH",
              "station_code": "NYA",
              "state_code": "WB",
              "sta": "",
              "si_no": 298,
              "distance_from_source": 1790
            },
            {
              "std": "",
              "station_name": "BENAPUR",
              "station_code": "BPE",
              "state_code": "WB",
              "sta": "",
              "si_no": 299,
              "distance_from_source": 1801
            },
            {
              "std": "",
              "station_name": "HIJILLI",
              "station_code": "HIJ",
              "state_code": "WB",
              "sta": "",
              "si_no": 300,
              "distance_from_source": 1809
            },
            {
              "std": "",
              "station_name": "KHARAGPUR WORKSHOP",
              "station_code": "KGPW",
              "state_code": null,
              "sta": "",
              "si_no": 301,
              "distance_from_source": 1811
            },
            {
              "std": "",
              "station_name": "KHARAGPUR JN",
              "station_code": "KGP",
              "state_code": "WB",
              "sta": "",
              "si_no": 302,
              "distance_from_source": 1816
            },
            {
              "std": "",
              "station_name": "JAKPUR",
              "station_code": "JPR",
              "state_code": "WB",
              "sta": "",
              "si_no": 303,
              "distance_from_source": 1823
            },
            {
              "std": "",
              "station_name": "MADPUR",
              "station_code": "MPD",
              "state_code": "WB",
              "sta": "",
              "si_no": 304,
              "distance_from_source": 1829
            },
            {
              "std": "",
              "station_name": "SHYAM CHAK",
              "station_code": "SMCK",
              "state_code": "WB",
              "sta": "",
              "si_no": 305,
              "distance_from_source": 1835
            },
            {
              "std": "",
              "station_name": "BALICHAK",
              "station_code": "BCK",
              "state_code": "WB",
              "sta": "",
              "si_no": 306,
              "distance_from_source": 1840
            },
            {
              "std": "",
              "station_name": "DUAN",
              "station_code": "DUAN",
              "state_code": "WB",
              "sta": "",
              "si_no": 307,
              "distance_from_source": 1843
            },
            {
              "std": "",
              "station_name": "RADHAMOHANPUR",
              "station_code": "RDU",
              "state_code": "WB",
              "sta": "",
              "si_no": 308,
              "distance_from_source": 1846
            },
            {
              "std": "",
              "station_name": "HAUR",
              "station_code": "HAUR",
              "state_code": "WB",
              "sta": "",
              "si_no": 309,
              "distance_from_source": 1851
            },
            {
              "std": "",
              "station_name": "KHIRAI",
              "station_code": "KHAI",
              "state_code": "WB",
              "sta": "",
              "si_no": 310,
              "distance_from_source": 1855
            },
            {
              "std": "",
              "station_name": "PANSKURA",
              "station_code": "PKU",
              "state_code": "WB",
              "sta": "",
              "si_no": 311,
              "distance_from_source": 1860
            },
            {
              "std": "",
              "station_name": "PANSKURA EAST OUTER",
              "station_code": "PKEO",
              "state_code": "WB",
              "sta": "",
              "si_no": 312,
              "distance_from_source": 1863
            },
            {
              "std": "",
              "station_name": "NARAYAN PAKURIA",
              "station_code": "NPMR",
              "state_code": "WB",
              "sta": "",
              "si_no": 313,
              "distance_from_source": 1864
            },
            {
              "std": "",
              "station_name": "BHOGPUR",
              "station_code": "BOP",
              "state_code": "WB",
              "sta": "",
              "si_no": 314,
              "distance_from_source": 1868
            },
            {
              "std": "",
              "station_name": "NANDAHGANJA",
              "station_code": "NDGJ",
              "state_code": "WB",
              "sta": "",
              "si_no": 315,
              "distance_from_source": 1870
            },
            {
              "std": "",
              "station_name": "MECHEDA",
              "station_code": "MCA",
              "state_code": "WB",
              "sta": "",
              "si_no": 316,
              "distance_from_source": 1873
            },
            {
              "std": "",
              "station_name": "KOLAGHAT GOODS",
              "station_code": "KIG",
              "state_code": "WB",
              "sta": "",
              "si_no": 317,
              "distance_from_source": 1876
            },
            {
              "std": "",
              "station_name": "DEULTI",
              "station_code": "DTE",
              "state_code": "WB",
              "sta": "",
              "si_no": 318,
              "distance_from_source": 1880
            },
            {
              "std": "",
              "station_name": "GHORAGHATA",
              "station_code": "GGTA",
              "state_code": "WB",
              "sta": "",
              "si_no": 319,
              "distance_from_source": 1883
            },
            {
              "std": "",
              "station_name": "BAGNAN",
              "station_code": "BZN",
              "state_code": "WB",
              "sta": "",
              "si_no": 320,
              "distance_from_source": 1886
            },
            {
              "std": "",
              "station_name": "KULGACHIA",
              "station_code": "KGY",
              "state_code": "WB",
              "sta": "",
              "si_no": 321,
              "distance_from_source": 1891
            },
            {
              "std": "",
              "station_name": "BIR SHIBPUR",
              "station_code": "BSBP",
              "state_code": "WB",
              "sta": "",
              "si_no": 322,
              "distance_from_source": 1895
            },
            {
              "std": "",
              "station_name": "ULUBARIA",
              "station_code": "ULB",
              "state_code": "WB",
              "sta": "",
              "si_no": 323,
              "distance_from_source": 1899
            },
            {
              "std": "",
              "station_name": "PHULESWAR",
              "station_code": "FLR",
              "state_code": "WB",
              "sta": "",
              "si_no": 324,
              "distance_from_source": 1901
            },
            {
              "std": "",
              "station_name": "CHENGEL",
              "station_code": "CGA",
              "state_code": "WB",
              "sta": "",
              "si_no": 325,
              "distance_from_source": 1904
            },
            {
              "std": "",
              "station_name": "BAURIA JN",
              "station_code": "BVA",
              "state_code": "WB",
              "sta": "",
              "si_no": 326,
              "distance_from_source": 1907
            },
            {
              "std": "",
              "station_name": "NALPUR",
              "station_code": "NALR",
              "state_code": "WB",
              "sta": "",
              "si_no": 327,
              "distance_from_source": 1911
            },
            {
              "std": "",
              "station_name": "ABADA",
              "station_code": "ABB",
              "state_code": "WB",
              "sta": "",
              "si_no": 328,
              "distance_from_source": 1913
            },
            {
              "std": "",
              "station_name": "SANKRAIL GOODS",
              "station_code": "SGTY",
              "state_code": "WB",
              "sta": "",
              "si_no": 329,
              "distance_from_source": 1914
            },
            {
              "std": "",
              "station_name": "SANKRALL",
              "station_code": "SEL",
              "state_code": "WB",
              "sta": "",
              "si_no": 330,
              "distance_from_source": 1915
            },
            {
              "std": "",
              "station_name": "ANDUL",
              "station_code": "ADL",
              "state_code": "WB",
              "sta": "",
              "si_no": 331,
              "distance_from_source": 1919
            },
            {
              "std": "",
              "station_name": "MAURIGRAM",
              "station_code": "MRGM",
              "state_code": "WB",
              "sta": "",
              "si_no": 332,
              "distance_from_source": 1921
            },
            {
              "std": "",
              "station_name": "SANTRAGACHI JN",
              "station_code": "SRC",
              "state_code": "WB",
              "sta": "",
              "si_no": 333,
              "distance_from_source": 1924
            },
            {
              "std": "",
              "station_name": "RAMRAJATALA",
              "station_code": "RMJ",
              "state_code": "WB",
              "sta": "",
              "si_no": 334,
              "distance_from_source": 1925
            },
            {
              "std": "",
              "station_name": "DASNAGAR",
              "station_code": "DSNR",
              "state_code": "WB",
              "sta": "",
              "si_no": 335,
              "distance_from_source": 1927
            },
            {
              "std": "",
              "station_name": "TIKIAPARA",
              "station_code": "TPKR",
              "state_code": "WB",
              "sta": "",
              "si_no": 336,
              "distance_from_source": 1928
            },
            {
              "std": "",
              "station_name": "HOWRAH GOODS",
              "station_code": "HWHG",
              "state_code": "WB",
              "sta": "",
              "si_no": 337,
              "distance_from_source": 1930
            },
            {
              "std": "",
              "station_name": "HOWRAH JN CABIN",
              "station_code": "HJN",
              "state_code": "WB",
              "sta": "",
              "si_no": 338,
              "distance_from_source": 1930
            }
          ],
          "halt": 14,
          "food_available": true,
          "etd": "09:44",
          "eta_a_min": 2010,
          "eta": "09:30",
          "distance_from_source": 1492,
          "distance_from_current_station_txt": "Next stop 1056 kms to go",
          "distance_from_current_station": 1056,
          "day": 1,
          "arrival_delay": 20,
          "a_day": 1
        },
        {
          "stoppage_number": 6,
          "std": "16:50",
          "station_name": "HOWRAH JN",
          "station_lng": 88.340979,
          "station_lat": 22.584058,
          "station_code": "HWH",
          "state_code": "WB",
          "sta": "16:50",
          "smart_city_id": null,
          "si_no": 339,
          "platform_number": 21,
          "on_time_rating": 6,
          "non_stops": [],
          "halt": 0,
          "food_available": true,
          "etd": "16:50",
          "eta_a_min": 2450,
          "eta": "16:50",
          "distance_from_source": 1931,
          "distance_from_current_station_txt": "Next stop 1495 kms to go",
          "distance_from_current_station": 1495,
          "day": 1,
          "arrival_delay": 0,
          "a_day": 1
        }
      ],
      "spent_time": 0.727
    }
  }
  const q = process.env.NEXT_PUBLIC_API;
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    try {
      const response = await fetch(
        `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${trainno}&startDay=${dayno}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": q,
            "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const dat = await response.json();
      console.log(dat);
      setData(dat);
      setChecking(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="mt-20">
      <h1>Live Status</h1>
      <form>
        <input
          type="text"
          value={trainno}
          onChange={(e) => setTrainno(e.target.value)}
          placeholder="Train Number"
        />
        <input
          type="number"
          value={dayno}
          onChange={(e) => setDayno(e.target.value)}
          placeholder="Day Number"
        />
        <button onClick={handleSubmit}>Submit</button>
        <TrainDetails data={tdata} />
      </form>
    </div>
  );
};

export default Page;
