/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded", function() {
	var div, n,
		v = document.getElementsByClassName("youtube-player");
		c = document.getElementsByClassName("youtube-card");
	for (n = 0; n < v.length; n++) {
		div = document.createElement("div");
		div.setAttribute("data-id", v[n].dataset.id);
		div.innerHTML = labnolThumb(v[n].dataset.id);
		div.onclick = labnolIframe;
		v[n].appendChild(div);
	}
	for (n = 0; n < c.length; n++) {
		div = document.createElement("div");
		div.setAttribute("data-id", c[n].dataset.id);
		div.innerHTML = youtube_card(c[n].dataset.id);
		c[n].appendChild(div);
	}
});

function youtube_card(id) {
	var thumb = '<img src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg" alt="an image from the video">';
	return thumb;
}

function labnolThumb(id) {
	var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="an image from the video" class="an image from the video">',
			play = '<div class="play"></div>';
	return thumb.replace("ID", id) + play;
}

function labnolIframe() {
		var iframe = document.createElement("iframe");
		var embed = "https://www.youtube.com/embed/ID?autoplay=1";
		iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allowfullscreen", "1");
		this.parentNode.replaceChild(iframe, this);
}
