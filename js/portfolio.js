var app = angular.module("portfolio", []);

app.controller('worksController', function($scope) {

  $scope.works = [
                  {
                    ProjectName: "B21 Gameplay",
                    Category: "Video",
                    CategoryAlt: "Videos",
                    Year: "2018",
                    Link: "https://vimeo.com/249373398",
                    Image: {"background-image" : "url('https://i.vimeocdn.com/video/675169794_640x1138.jpg')"}
                  },
                  {
                    ProjectName: "B21",
                    Category: "Android Game",
                    CategoryAlt: "Games",
                    Year: "2018",
                    Link: "https://play.google.com/store/apps/details?id=com.berkekiran.b21",
                    Image: {"background-image" :  "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/28ad7c60331263.5a47c71711730.png')"}
                  },
                  { ProjectName: "B21 Soundtrack",
                    Category: "Soundtrack",
                    CategoryAlt: "Soundtracks",
                    Year: '2018',
                    Link: 'https://soundcloud.com/berkekiran/b21-soundtrack',
                    Image: {"background-image" :  "url('https://i1.sndcdn.com/artworks-000273726992-0cts00-t500x500.jpg')"}
                  },
                  { ProjectName: "Showreel 2017 (2nd)",
                    Category: "Video",
                    CategoryAlt: "Videos",
                    Year: "2017",
                    Link: "https://vimeo.com/244029667",
                    Image: {"background-image" :  "url('https://i.vimeocdn.com/video/668343327_640x360.jpg')"}
                  },
                  { ProjectName: "Boromir",
                    Category: "3D Character",
                    CategoryAlt: "Characters",
                    Year: "2017",
                    Link: "https://www.artstation.com/artwork/RrGVv",
                    Image: {"background-image" :  "url('https://cdna.artstation.com/p/assets/images/images/008/183/894/large/berke-kiran-cover.jpg?1511024780')"}
                  },
                  { ProjectName: "Portfolio 2017 v2",
  									Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2017',
                    Link: "https://www.behance.net/gallery/56636523/Portfolio-2017-v2",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/c69f2456636523.59b6d5ef3be53.png')"}
  								},
                  { ProjectName: 'Portfolio 2017 / Behance',
                    Category: "Video",
                    CategoryAlt: "Videos",
                    Year: '2017',
                    Link: "https://vimeo.com/229985411",
                    Image: {"background-image" : " url('https://i.vimeocdn.com/video/650439777_640x427.jpg')"}
                  },
                  { ProjectName: 'Portfolio 2017',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2017',
                    Link: "https://www.behance.net/gallery/55844571/Portfolio-2017",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/f0f0d755844571.59957ded498a7.png')"}
                  },
                  { ProjectName: "Showreel 2017",
                    Category: "Video",
                    CategoryAlt: "Videos",
                    Year: "2017",
                    Link: "https://vimeo.com/229903690",
                    Image: {"background-image" :  "url('https://i.vimeocdn.com/video/650340447_640x360.jpg')"}
                  },
                  { ProjectName: "Orc Leader Teaser",
                    Category: "Video",
                    CategoryAlt: "Videos",
                    Year: "2017",
                    Link: "https://vimeo.com/229586787",
                    Image: {"background-image" :  "url('https://i.vimeocdn.com/video/649934229_640x360.jpg')"}
                  },
                  { ProjectName: "Orc Leader",
                    Category: "3D Character",
                    CategoryAlt: "Characters",
                    Year: "2017",
                    Link: "https://www.artstation.com/artwork/2V4Lx",
                    Image: {"background-image" :  "url('https://cdna.artstation.com/p/assets/images/images/006/823/800/large/berke-kiran-screenshot006.jpg?1501534299')"}
                  },
                  { ProjectName: "Berke Kiran' Sketchbook",
                    Category: "Sketchbook",
                    CategoryAlt: "Sketchbooks",
                    Year: '2017',
                    Link: 'https://www.artstation.com/artwork/0gXRK',
                    Image: {"background-image" :  "url('https://cdna.artstation.com/p/assets/images/images/007/018/816/large/berke-kiran-sketchbook-cover.jpg?1510924795')"}
                  },
                  { ProjectName: "Berke Kiran - noMore",
                    Category: "Soundtrack",
                    CategoryAlt: "Soundtracks",
                    Year: '2017',
                    Link: 'https://soundcloud.com/berkekiran/berkekiran-nomore',
                    Image: {"background-image" :  "url('https://i1.sndcdn.com/artworks-000243745966-iqom95-t500x500.jpg')"}
                  },
                  { ProjectName: "2d Police Characters",
  									Category: "Sprite",
                    CategoryAlt: "Other Projects",
  									Year: '2017',
  									Link: 'https://www.piskelapp.com/user/6579624730427392',
  									Image: {"background-image" :  "url('https://www.piskelapp.com/img/agxzfnBpc2tlbC1hcHByFwsSCkZyYW1lc2hlZXQYgIDA1vy4nggM/preview')"}
  								},
                  { ProjectName: "Berke Kiran - Truth",
  									Category: "Soundtrack",
                    CategoryAlt: "Soundtracks",
  									Year: '2017',
  									Link: 'https://soundcloud.com/berkekiran/berkekiran-truth',
  									Image: {"background-image" :  "url('https://i1.sndcdn.com/artworks-000191727884-jhw42q-t500x500.jpg')"}
  								},
                  { ProjectName: 'Portfolio 2016 v2',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2016',
                    Link: "https://www.behance.net/gallery/55791649/Portfolio-2016-v2",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/cdc09055791649.5993654db84a4.png')"}
                  },
                  { ProjectName: "Sleeping Creature",
                    Category: "3D Creature",
                    CategoryAlt: "Characters",
                    Year: "2016",
                    Link: "https://www.artstation.com/artwork/vdwLA",
                    Image: {"background-image" :  "url('https://cdna.artstation.com/p/assets/images/images/006/823/646/large/berke-kiran-sleeping-creature.jpg?1501533327')"}
                  },
                  { ProjectName: "The God",
                    Category: "Digital Artwork",
                    CategoryAlt: "Characters",
                    Year: "2016",
                    Link: "https://www.artstation.com/artwork/Nm8g5",
                    Image: {"background-image" :  "url('https://cdna.artstation.com/p/assets/images/images/006/805/672/large/berke-kiran-thegod.jpg?1501398937')"}
                  },
                  { ProjectName: 'Video Games CS',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2016',
                    Link: "https://www.behance.net/gallery/55790661/Video-Games-Center-Station",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/04aa1355790661.59935d185a7dd.png')"}
                  },
                  { ProjectName: 'Portfolio 2016',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2016',
                    Link: 'https://www.behance.net/gallery/55771277/Portfolio-2016',
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/1bc49055771277.5992c282f15f0.png')"}
                  },
                  { ProjectName: "Berke Kiran - Death",
                    Category: "Soundtrack",
                    CategoryAlt: "Soundtracks",
                    Year: '2016',
                    Link: 'https://soundcloud.com/berkekiran/berkekiran-death',
                    Image: {"background-image" :  "url('https://i1.sndcdn.com/artworks-000234595360-df8qty-t500x500.jpg')"}
                  },
                  { ProjectName: "John",
                    Category: "3D Character",
                    CategoryAlt: "Characters",
                    Year: "2016",
                    Link: "https://www.artstation.com/artwork/4Vd4k",
                    Image: {"background-image" :  "url('https://cdnb.artstation.com/p/assets/images/images/006/842/405/large/berke-kiran-john-render-1.jpg?1501662674')"}
                  },
                  { ProjectName: "UE4 Snowy Road",
                    Category: "UE4 Project",
                    CategoryAlt: "Other Projects",
                    Year: '2015',
                    Link: 'https://www.artstation.com/artwork/ONdgg',
                    Image: {"background-image" :  "url('https://cdna.artstation.com/p/assets/images/images/006/805/710/large/berke-kiran-snowyroad1.jpg?1510924858')"}
                  },
                  { ProjectName: "UE4 Snow System v2",
  									Category: "UE4 Project",
                    CategoryAlt: "Other Projects",
  									Year: '2015',
  									Link: 'https://github.com/berkekiran/ue4-snow-system-v2',
  									Image: {"background-image" :  "url('https://answers.unrealengine.com/storage/temp/64914-ue_tablet_mat.jpg')"}
  								},
                  { ProjectName: "UE4 Snow System v1",
  									Category: "UE4 Project",
                    CategoryAlt: "Other Projects",
  									Year: '2015',
  									Link: 'https://github.com/berkekiran/ue4-snow-system-v1',
  									Image: {"background-image" :  "url('https://answers.unrealengine.com/storage/temp/64914-ue_tablet_mat.jpg')"}
  								},
                  { ProjectName: 'Portfolio 2015 v5',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2015',
                    Link: 'https://www.behance.net/gallery/55754747/Portfolio-2015-v5',
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/aef4b955754747.599203545286e.png')"}
                  },
                  { ProjectName: 'Portfolio 2015 v4',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2015',
                    Link: "https://www.behance.net/gallery/55752371/Portfolio-2015-v4",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/a916da55752371.5991fd8e882e8.png')"}
                  },
                  { ProjectName: 'Portfolio 2015 v3',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2015',
                    Link: "https://www.behance.net/gallery/55748605/Portfolio-2015-v3-Design",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/28699b55748605.5991d45a2220b.png')"}
                  },
                  { ProjectName: 'Portfolio 2015 v2',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2015',
                    Link: "https://www.behance.net/gallery/55747869/Portfolio-2015-v2-Design",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/cfa60955747869.5991cdd8f2575.png')"}
                  },
                  { ProjectName: "Adam Noise - Soundtrack v3",
                    Category: "Soundtrack",
                    CategoryAlt: "Soundtracks",
                    Year: '2015',
                    Link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v3',
                    Image: {"background-image" :  "url('https://i1.sndcdn.com/artworks-000234595502-vf8uni-t500x500.jpg')"}
                  },
                  { ProjectName: "Adam Noise - Soundtrack v2",
                    Category: "Video",
                    CategoryAlt: "Videos",
                    Year: '2015',
                    Link: 'https://vimeo.com/226498391',
                    Image: {"background-image" :  "url('https://i.vimeocdn.com/video/646124825_640x360.jpg')"}
                  },
                  { ProjectName: "Adam Noise - Soundtrack v2",
  									Category: "Soundtrack",
                    CategoryAlt: "Soundtracks",
  									Year: '2015',
  									Link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v2',
  									Image: {"background-image" :  "url('https://i1.sndcdn.com/artworks-000234595592-c33567-t500x500.jpg')"}
  								},
                  { ProjectName: "Adam Noise - Soundtrack v1",
  									Category: "Video",
                    CategoryAlt: "Videos",
  									Year: '2015',
  									Link: 'https://vimeo.com/226498485',
  									Image: {"background-image" :  "url('https://i.vimeocdn.com/video/646125632_640x360.jpg')"}
  								},
                  { ProjectName: "Adam Noise - Soundtrack v1",
  									Category: "Soundtrack",
                    CategoryAlt: "Soundtracks",
  									Year: '2015',
  									Link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v1',
  									Image: {"background-image" :  "url('https://i1.sndcdn.com/artworks-000234595719-1nqrkm-t500x500.jpg')"}
  								},
                  { ProjectName: "Metal Dragon - Video",
  									Category: "Video",
                    CategoryAlt: "Videos",
  									Year: '2015',
  									Link: 'https://vimeo.com/226496501',
  									Image: {"background-image" :  "url('https://i.vimeocdn.com/video/646122388_640x360.jpg')"}
  								},
                  { ProjectName: 'Portfolio 2015 / Behance',
                    Category: "Video",
                    CategoryAlt: "Videos",
                    Year: '2015',
                    Link: "https://vimeo.com/229559858",
                    Image: {"background-image" : " url('https://i.vimeocdn.com/video/649900528_640x427.jpg')"}
                  },
                  { ProjectName: 'Portfolio 2015',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2015',
                    Link: "https://www.behance.net/gallery/55742749/Portfolio-2015",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/54beff55742749.5991a4c36df38.png')"}
                  },
                  { ProjectName: 'Photo Galleries',
                    Category: "Website",
                    CategoryAlt: "Websites",
                    Year: '2014',
                    Link: "https://www.behance.net/gallery/55738571/Photo-Galleries",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/085b1c55738571.59917f5560ae0.png')"}
                  },
                  { ProjectName: 'Quick Write',
                    Category: "Silverlight Project",
                    CategoryAlt: "Other Projects",
                    Year: '2013',
                    Link: "https://www.behance.net/gallery/55736987/Quick-Write",
                    Image: {"background-image" : " url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/1ddf4855736987.599178c3362b3.png')"}
                  }
                 ];

  $scope.worksCategories = [
                            { Category: "All"},
                            { Category: "Characters"},
                            { Category: "Websites"},
                            { Category: "Games"},
                            { Category: "Videos"},
                            { Category: "Soundtracks"},
                            { Category: "Sketchbooks"},
                            { Category: "Other Projects"}
                           ];

  $scope.numberofworks = $scope.works.length * 450;
  $(".works").css({'width': $scope.numberofworks + 'px'});

  $scope.selectedCategory = '';

  $scope.setFilterCategory = function(value) {
    $scope.selectedCategory = value;
  };

  $scope.filterByCategory = function(item) {
    if ($scope.selectedCategory){
      $(".works").css({'width': $scope.filtered.length * 450 + 'px'});
      if($scope.selectedCategory == 'All')
        return item;
      else{
        return $scope.selectedCategory === item.CategoryAlt;
      }
    }
    else{
      return item;
    }
  };

});
