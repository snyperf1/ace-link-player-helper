const streamInput = document.getElementById("streamInput");
const buildBtn = document.getElementById("buildBtn");
const results = document.getElementById("results");
const errorBox = document.getElementById("error");

const acestreamAnchor = document.getElementById("acestreamAnchor");
const httpAnchor = document.getElementById("httpAnchor");
const hlsAnchor = document.getElementById("hlsAnchor");

const acestreamText = document.getElementById("acestreamText");
const httpText = document.getElementById("httpText");
const hlsText = document.getElementById("hlsText");

const copyAcestream = document.getElementById("copyAcestream");
const copyHttp = document.getElementById("copyHttp");
const copyHls = document.getElementById("copyHls");

function extractId(rawValue) {
  const value = rawValue.trim();
  if (!value) return null;

  if (value.startsWith("acestream://")) {
    return value.slice("acestream://".length).trim();
  }

  return value;
}

function isLikelyAceId(id) {
  return /^[a-fA-F0-9]{40}$/.test(id);
}

async function copyText(text, button) {
  const original = button.textContent;
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
  } catch {
    button.textContent = "Copy failed";
  } finally {
    window.setTimeout(() => {
      button.textContent = original;
    }, 1100);
  }
}

function buildLinks() {
  errorBox.textContent = "";

  const id = extractId(streamInput.value);
  if (!id || !isLikelyAceId(id)) {
    results.classList.add("hidden");
    errorBox.textContent = "Enter a valid 40-character Ace Stream content ID (hex) or acestream:// link.";
    return;
  }

  const proto = `acestream://${id}`;
  const http = `http://127.0.0.1:6878/ace/getstream?id=${id}`;
  const hls = `http://127.0.0.1:6878/ace/manifest.m3u8?id=${id}`;

  acestreamAnchor.href = proto;
  httpAnchor.href = http;
  hlsAnchor.href = hls;

  acestreamText.textContent = proto;
  httpText.textContent = http;
  hlsText.textContent = hls;

  copyAcestream.onclick = () => copyText(proto, copyAcestream);
  copyHttp.onclick = () => copyText(http, copyHttp);
  copyHls.onclick = () => copyText(hls, copyHls);

  results.classList.remove("hidden");
}

buildBtn.addEventListener("click", buildLinks);
streamInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buildLinks();
  }
});
