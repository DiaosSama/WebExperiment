function quicksort(arr){
    if(arr.length <= 1) { return arr; }
    var pivot = arr.splice(Math.floor(arr.length/2), 1);
    
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot[0]){ left.push(arr[i]); }
        else{ right.push(arr[i]); }
    }
    //alert("arr"+arr+'\n'+"pivot"+pivot+'\n'+"left"+left+'\n'+"right"+right);
    var res = quicksort(left).concat(pivot, quicksort(right));
    //alert(res);
    return res;
}

function quicksorthelp(id)
{
    x = document.getElementById(id);
    var text = x.value;
    var arr = text.split(',');
    for(var i=0;i<arr.length;i++){
        arr[i] = parseFloat(arr[i]);
    }
    try{
        sortok = quicksort(arr);
        alert(sortok);
    }
    catch(err){
        alert("输入格式错误！");
    }
}

function resort()
{
    x1 = document.getElementById("movie1");
    x2 = document.getElementById("movie2");
    x3 = document.getElementById("movie3")
    var movie = [];
    movie.push(x1.innerHTML);
    movie.push(x2.innerHTML);
    movie.push(x3.innerHTML);
    x1.innerHTML = movie[2];
    x2.innerHTML = movie[1];
    x3.innerHTML = movie[0];
    var str = "";
    for(var i=movie.length;i--;i>=0){
        str += (movie[i] + '\n');
    }
    alert(str);
}

function changeColor(id){
    switch(id){
        case 1:
            x = document.getElementById("movie3");
            x.style.color = "black"
            x = document.getElementById("movie1");
            x.style.color = "red"
            break;
        case 2:
            x = document.getElementById("movie1");
            x.style.color = "black"
            x = document.getElementById("movie2");
            x.style.color = "red"
            break;
        case 3:
            x = document.getElementById("movie2");
            x.style.color = "black"
            x = document.getElementById("movie3");
            x.style.color = "red"
            break;
    }
    setTimeout(changeColor, 3000, id%3+1);
}