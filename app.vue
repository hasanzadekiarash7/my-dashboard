<template>
  <div>
    <NuxtLoadingIndicator color="red" :duration="10000" :height="10" />
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p>{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
