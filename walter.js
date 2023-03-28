(async () => {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
speechManager=Deobfuscator.object(ig.game, "abc", true)
distanceBetween=Deobfuscator.function(EntityThrownItem.prototype, "pow", true)
playertext=Deobfuscator.object(ig.game.player, "player", true)
textlist=Deobfuscator.keyBetween(SpeechDisplay.prototype.update, ")this.", "[b].u")
thetext=Deobfuscator.keyBetween(SpeechDisplayLine.prototype.draw, "c=this.", ";\n")
setInterval(()=>{
    for (let index = 1; index < ig.game[players].player.length; index++) {
            if (EntityThrownItem.prototype[distanceBetween](ig.game.player.pos.x, ig.game.player.pos.y, ig.game[players].player[index].pos.x, ig.game[players].player[index].pos.y)<50) {
        for (let index2 = 0; index2 < ig.game[players].player[index][playertext][textlist].length; index2++) {
        if (ig.game[players].player[index][playertext][textlist][index2].full==true && !ig.game[players].player[index][playertext][textlist][index2].bell) {
           talkToWalter(ig.game[players].player[index][playertext][textlist][index2][thetext]); ig.game[players].player[index][playertext][textlist][index2].bell=true}
    }
}
    }
}, 0);

tex=""
talkToWalter=function(a) { 
    fetch("https://beta.character.ai/chat/streaming/", {
                                                    method: "POST",
                                                    headers: {
                                                        Authorization: "Token " + "89651f38ac0f73a06a6e31196bbb9898704b31bb",
                                                        "content-type": "application/json"
                                                    },
                                                    body: '{"history_external_id":"GnNKz-8hwqzak-6r-zP8FmOaxi9qKrerYH_bNVYm41s","character_external_id":"kOEkEs6PXP0U4fjY93mZw3ujPQRdLuUIeXzXbUPx6SI","text":"'+a+'","tgt":"internal_id:8216:fc88b02a-4be9-41b5-b363-79171f92c9bc","ranking_method":"random","staging":false,"model_server_address":null,"model_server_address_exp_chars":null,"override_prefix":null,"override_rank":null,"rank_candidates":null,"filter_candidates":null,"unsanitized_characters":null,"prefix_limit":null,"prefix_token_limit":null,"stream_params":null,"enable_tti":null,"initial_timeout":null,"insert_beginning":null,"stream_every_n_steps":16,"chunks_to_pad":8,"is_proactive":false,"image_rel_path":"","image_description":"","image_description_type":"","image_origin_type":"","voice_enabled":false,"parent_msg_uuid":null,"seen_msg_uuids":[],"retry_last_user_msg_uuid":null,"num_candidates":1,"give_room_introductions":true,"mock_response":false}'
                                                }).then(response => response.text().then(function(text) {tex=JSON.parse(text.replaceAll('  ', '').split('\n')[text.split('\n').length-2]).replies[0].text}));
};

setInterval(()=>{
    if (tex.length>0) {
ig.game[speechManager].say("_c"+tex.charAt(0)); tex=tex.substr(1)
    }
}, 50)
})();
