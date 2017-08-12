function accomsSelect(category)
{
    $("div[id*='acc']").hide();
    switch (category)
    {
        case 1:$("#acc5").show(); $("#acc10").show(); break;
        case 2:$("#acc7").show(); $("#acc9").show(); break;
        case 3:$("#acc4").show(); $("#acc8").show(); break;
        case 4:$("#acc1").show(); $("#acc3").show(); break;
        case 5:$("#acc2").show(); $("#acc6").show(); break;
        default : $("div[id*='acc']").show();break;
    }
}
function showAll()
{
    $("div[id*='acc']").show();
}