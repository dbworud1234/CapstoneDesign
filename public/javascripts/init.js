function init(lists, listnum, ranking, boards, hashtags, user, boardsonglist){ //load playlist that user saved before
  // 근데 이걸 새로고침(sss클릭 시 ) 뭐 그런식으로 쓰려면 서버에서 받아와야함. init 실행하면 그전에 있던 정보로만 하므로 구대기임
  // 서버에서 받아와야함....가라 url 쓰던가
  console.log(user);
  console.log(user[0]);
  var printRK=`<h1>R a n k i n g</h1>`;
  if(lists ==-1){
    console.log("이까지 했다잉");
    if(!!ranking){
      for(var i in ranking){
        var song=ranking[i];
        if(song.title.indexOf('&amp;#39;')>-1){
          song.title=song.title.replace('&amp;#39;','\'');
        }
        printRK+=`<div class="ranklist" style="background-color:#eceff6; height:60px;" onclick="onclickRanklist(\'${song.vid}\',\'${song.artist}\',\'${song.title}\')"><img src="${song.thumbNail}" style="border-radius:8px; width:60px; height:60px; float:left;" > <span style="display:block;">${song.artist}</span><span style="display:block;">${song.title}</span><div onclick="event.cancelBubble=true;"><button onclick="onclickRankAddBtn(${i},1)">담기</button></div></div>`;
      }
      document.getElementById("Ranking").innerHTML=printRK;
    }
    if(!!boards) {
      console.log("보드 있냐??");
      if(!!hashtags) {
        var uid="";
        var boardlist="";
        boardlist += `<button id="createBtn" type="button" onclick="window.open('creates', 'win', 'width=500, height=800, top=80, left=550')">
        새 글 작성</button><br><br>`;
        for(var i in boards) {
          var usrname;
          for(var j in user){
            if(user[j].id==boards[i].userId) {
              usrname=user[j].nickname;
              uid = user[j].id;
              break;
            }
          }
          boardlist += `<div style="text-align: center;background-color: white; font-size:16px; border:1px solid gray; border-radius:10px;">
          <h4 style="text-align: left; margin-left: 30px; border-bottom: 1px dashed gray; margin-right: 30px; margin-bottom:10px;" onclick="userView(${uid})">${usrname}</h4><img src="${boards[i].img}" width="300" height="250" />
          <br><tr><td>${boards[i].text}</td></tr><br><br>`;
          for(var j in hashtags) {
            if(boards[i].id == hashtags[j].boardId){
              boardlist += `<span style="color:blue;font-size:13px;">#${hashtags[j].text} &nbsp</span>`;
            }
          }
          boardlist += `<br><p style="border-top: 1px dashed gray; margin-left:30px; margin-right:30px;"></p>`;
          var bsl;
          for(var k in boardsonglist){
            if(boards[i].vid==boardsonglist[k].vid) {
              bsl=boardsonglist[k];
              break;
            }

          }
          boardlist += `<img src="${bsl.thumbNail}" style="width:50px; height:50px; border-radius:10px; margin-left:30px; float:left;" >
          <p style="display:block; font-size:15px;"><br>${bsl.artist}&nbsp;&nbsp;-&nbsp;&nbsp;${bsl.title}</p>`;

          boardlist += `<br></div><br>`;
        }
        document.getElementById("SNS").innerHTML = boardlist;
      }
    }
  }
  else {
    var songInfo=[];
    for(var i=0;i<listnum;i++){
      var v=lists[i];
      songInfo.push({"artist":v.artist, "title":v.title,"VID":v.vid, "official_flag":v.official_flag,"thumbNail":{default : {url : v.thumbNail}}});
      list.append(songInfo[i]);
    }
    PLdisplay(list);

    if(!!ranking){
      for(var i in ranking){
        var song=ranking[i];
        if(song.title.indexOf('&amp;#39;')>-1){
          song.title=song.title.replace('&amp;#39;','\'');
        }
        printRK+=`<div class="ranklist" style="background-color:#eceff6; height:60px;" onclick="onclickRanklist(\'${song.vid}\',\'${song.artist}\',\'${song.title}\')"><img src="${song.thumbNail}" style="border-radius:8px; width:60px; height:60px; float:left;" > <span style="display:block;">${song.artist}</span><span style="display:block;">${song.title}</span><div onclick="event.cancelBubble=true;"><button onclick="onclickRankAddBtn(${i},1)">담기</button></div></div>`;
      }
      document.getElementById("Ranking").innerHTML=printRK;

      if(!!boards) {
        if(!!hashtags) {
          if(!!lists) {
            var uid="";
            var boardlist="";
            boardlist += `<button id="createBtn" type="button" onclick="window.open('creates', 'win', 'width=500, height=800, top=80, left=550')">
            새 글 작성</button><br><br>`;

            for(var i in boards) {
              var usrname;

              for(var j in user){
                if(user[j].id==boards[i].userId) {
                  usrname=user[j].nickname;
                  uid = user[j].id;
                  break;
                }
              }
              boardlist += `<div style="text-align: center;background-color: white; font-size:16px; border:1px solid gray; border-radius:10px;">
              <h4 style="text-align: left; margin-left: 30px; border-bottom: 1px dashed gray; margin-right: 30px; margin-bottom:10px;" onclick="userView(${uid})">${usrname}</h4><img src="${boards[i].img}" width="300" height="250" />
              <br><tr><td>${boards[i].text}</td></tr><br><br>`;
              for(var j in hashtags) {
                if(boards[i].id == hashtags[j].boardId){
                  boardlist += `<span style="color:blue;font-size:13px;">#${hashtags[j].text} &nbsp</span>`;
                }
              }
              var bsl;
              for(var k in boardsonglist){
                if(boards[i].vid==boardsonglist[k].vid) {
                  bsl=boardsonglist[k];
                  break;
                }
              }
              boardlist += `<br><p style="border-top: 1px dashed gray; margin-left:30px; margin-right:30px;"></p>`;
              boardlist += `<img src="${bsl.thumbNail}" style="width:50px; height:50px; border-radius:10px; margin-left:30px; float:left;" >
              <p style="display:block; font-size:15px;"><br>${bsl.artist}&nbsp;&nbsp;-&nbsp;&nbsp;${bsl.title}</p>`;
              boardlist += `<br></div><br>`;
            }
            document.getElementById("SNS").innerHTML = boardlist;
          }
        }
      }
    }
  }
}

function myinit(boards, hashtags, boardsonglist) {
  var myboardsong = "";
  for(var i in boards){
    var bsl;
    myboardsong += `<span id="myBoard" style="background-color: white; width:99.6%; font-size:16px; border:1px solid gray; border-radius: 10px; display: inline-block;">
    <span>
    <img src="${boards[i].img}" width="300" height="250" />
    </span>
    <div id="boardText">
    ${boards[i].text}
    </div>`;
    myboardsong += `<p style="color:blue; font-size:13px;">`;
    for(var j in hashtags){
      if(boards[i].id == hashtags[j].boardId) {
        myboardsong += `#${hashtags[j].text} &nbsp;`;
      }
    }
    myboardsong += `</p>`;
    for(var k in boardsonglist) {
      if(boards[i].vid == boardsonglist[k].vid) {
        bsl = boardsonglist[k];
        break;
      }
    }
    myboardsong += `<br><p style="border-top: 1px dashed gray; margin-left:30px; margin-right:30px;"></p>`
    myboardsong += `<img src="${bsl.thumbNail}" style="width:50px; height:50px; border-radius:10px; margin-left:30px; float:left;"
    <p style="display:block; font-size: 15px;"><br>${bsl.artist}&nbsp;&nbsp;-&nbsp;&nbsp;${bsl.title}</p>`;
    myboardsong += `<div><button type="button" id="updateBtn" name="updateBtn" onclick="window.open('users/update/${boards[i].id}', 'window', 'width=500, height=300, top=80, left=550')" style="float:left; position:relative; left:34%;">게시물 수정</button>`;
    myboardsong += `<form action="/users/delete/${boards[i].id}?_method=DELETE" method="post" onsubmit="return confirm('이 게시물을 삭제하시겠습니까?' );">
    <input type="hidden" name="_method" value="DELETE" >
    <input type="submit" id="deleteBtn" name="deleteBtn" value="게시물 삭제" style="float:right; position:relative; right:34%;" >
    </form></div>`;
    myboardsong += `</div><br></span><br><br>`;

  }
  document.getElementById("mySNS").innerHTML = myboardsong;
}

function hashtaginit(boards, hashtags, boardsonglist) {
  var hashtagsong = "";
  for(var i in boards) {
    var bsl;
    hashtagsong += `<span style="background-color: white; width: 90%; font-size:16px; border:1px solid gray; border-radius: 10px; display: inline-block;">
    <span>
    <img src="${boards[i].img}" width="300" height="250" />
    </span>
    <div id="boardText">
    ${boards[i].text}
    </div>`;
    hashtagsong += `<p style="color:blue; font-size:13px;">`;
    for(var j in hashtags) {
      if(boards[i].id == hashtags[j].boardId) {
        hashtagsong += `#${hashtags[j].text} &nbsp;`;
      }
    }
    hashtagsong += `</p>`;
    for(var k in boardsonglist) {
      if(boards[i].vid == boardsonglist[k].vid){
        bsl = boardsonglist[k];
        break;
      }
    }
    hashtagsong += `<br><p style="border-top: 1px dashed gray; margin-left:30px; margin-right:30px;"></p>`;
    hashtagsong += `<img src="${bsl.thumbNail}" style="width:50px; height:50px; border-radius:10px; margin-left:30px; float:left;"
    <p style="display:block; font-size: 15px;"><br>${bsl.artist}&nbsp;&nbsp;-&nbsp;&nbsp;${bsl.title}</p>`;
    hashtagsong += `</div><br></span><br><br>`;
  }
  document.getElementById("hashtagSNS").innerHTML = hashtagsong;
}

function userinit(boards, hashtags, boardsonglist, user) {
  var userView = "";
  for(var i in boards){
    var bsl;
    userView += `<span style="background-color: white; width: 90%; font-size:16px; border:1px solid gray; border-radius: 10px; display: inline-block;">
    <span>
    <img src="${boards[i].img}" width="300" height="250" />
    </span>
    <div id="boardText">
    ${boards[i].text}
    </div>`;
    userView += `<p style="color:blue; font-size:13px;">`;
    for(var j in hashtags) {
      if(boards[i].id == hashtags[j].boardId) {
        userView += `#${hashtags[j].text} &nbsp;`;
      }
    }
    userView += `</p>`;
    for(var k in boardsonglist) {
      if(boards[i].vid == boardsonglist[k].vid){
        bsl = boardsonglist[k];
        break;
      }
    }
    userView += `<br><p style="border-top: 1px dashed gray; margin-left:30px; margin-right:30px;"></p>`;
    userView += `<img src="${bsl.thumbNail}" style="width:50px; height:50px; border-radius:10px; margin-left:30px; float:left;"
    <p style="display:block; font-size: 15px;"><br>${bsl.artist}&nbsp;&nbsp;-&nbsp;&nbsp;${bsl.title}</p>`;
    userView += `</div><br></span><br><br>`;
  }
  document.getElementById("userSNS").innerHTML = userView;
}
