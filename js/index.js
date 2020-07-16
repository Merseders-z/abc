$(function(){

    $('#normal').mouseover(function(){

        //鼠标移入"显示"方块
        $('#show').show();
        $(this).mousemove(function(ev){

            //鼠标移动方块随着移动
            $('#show').css({

                'left':ev.pageX-$('#show').width()/2,
                'top':ev.pageY-$('#show').height()/2

            })

            //防止方块移出图片内容    
            if($('#show').offset().top>$(this).height()-$('#show').height()){

                $('#show').css('top',$(this).height()-$('#show').height());

            }else if($('#show').offset().left>$(this).width()-$('#show').width()){

                $('#show').css('left',$(this).width()-$('#show').width());

            }else if($('#show').offset().bottom>$(this).height()-$('#show').height()){

                $('#show').css('bottom',$(this).height()-$('#show').height());

            }else if($('#show').offset().right>$(this).width()-$('#show').width()){

                $('#show').css('right',$(this).width()-$('#show').width());

            }

            //在大容器显示放大图片
            $('#big').find('img').css({

                'left':-1200*$('#show').offset().left/300,
                'top':-800*$('#show').offset().top/200

            });

        });


    });

    //鼠标移出图片让方块"消失"
    $('#normal').mouseout(function(){

        $('#show').hide(); 

    });

});
