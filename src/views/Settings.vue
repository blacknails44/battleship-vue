<template>
<div class="settings">
  <div>
    <div class="label">Select a difficulty</div>
    <div class="difficulty">
      <button class="button">Easy</button>
      <button class="button">Medium</button>
      <button class="button">Hard</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>
.settings {
  padding: 2rem;
}

.label {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: .5rem;
}
.difficulty {
  display: flex;
  gap: 1rem;
}
.button {
  background: #087EA4;
  color: #FFFFFF;
  font-weight: 600;
  padding: 6px 1rem;
  border-radius: .5rem;
}
</style>