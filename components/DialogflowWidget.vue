<!-- components/DialogflowWidget.vue -->
<template>
  <div>
    <df-messenger
      location="us-central1"
      project-id="project-441623"
      agent-id="86f66a4a-75f0-44ce-9b1c-ab5aae734e3e"
      language-code="en"
      max-query-length="-1">
      <df-messenger-chat-bubble chat-title="Guaros Tours">
      </df-messenger-chat-bubble>
    </df-messenger>
  </div>
</template>

<head>
  <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
  <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
</head>

<style scoped>
  df-messenger {
    z-index: 999;
    position: fixed;
    --df-messenger-font-color: #000;
    --df-messenger-font-family: Google Sans;
    --df-messenger-chat-background: #f3f6fc;
    --df-messenger-message-user-background: #d3e3fd;
    --df-messenger-message-bot-background: #fff;
    bottom: 16px;
    right: 16px;
  }
</style>
