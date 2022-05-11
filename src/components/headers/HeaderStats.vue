<script setup>
import { defineAsyncComponent } from 'vue'
import { ChartBarIcon, ChartPieIcon, PresentationChartLineIcon, UserGroupIcon } from '@heroicons/vue/solid'

const CardStats = defineAsyncComponent(() => import('@/components/shared/CardStats.vue'))
</script>

<template>
  <!-- Header -->
  <div class="relative py-12 bg-emerald-600 md:pt-32">
    <div class="w-full px-4 mx-auto md:px-10">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-6 xl:mb-0 lg:w-6/12 xl:w-3/12">
            <card-stats
              stat-subtitle="TRAFFIC"
              stat-title="350,897"
              stat-arrow="up"
              stat-percent="3.48"
              stat-percent-color="text-emerald-500"
              stat-descripiron="Since last month"
              stat-icon-color="bg-red-500"
            >
              <template #icon>
                <ChartBarIcon class="w-4 h-4" />
              </template>
            </card-stats>
          </div>
          <div class="w-full px-4 mb-6 xl:mb-0 lg:w-6/12 xl:w-3/12">
            <card-stats
              stat-subtitle="NEW USERS"
              stat-title="2,356"
              stat-arrow="down"
              stat-percent="3.48"
              stat-percent-color="text-red-500"
              stat-descripiron="Since last week"
              stat-icon-color="bg-orange-500"
            >
              <template #icon>
                <ChartPieIcon class="w-4 h-4" />
              </template>
            </card-stats>
          </div>
          <div class="w-full px-4 mb-6 xl:mb-0 lg:w-6/12 xl:w-3/12">
            <card-stats
              stat-subtitle="SALES"
              stat-title="924"
              stat-arrow="down"
              stat-percent="1.10"
              stat-percent-color="text-orange-500"
              stat-descripiron="Since yesterday"
              stat-icon-color="bg-pink-500"
            >
              <template #icon>
                <UserGroupIcon class="w-4 h-4" />
              </template>
            </card-stats>
          </div>
          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <card-stats
              stat-subtitle="PERFORM"
              stat-title="49,65%"
              stat-arrow="up"
              stat-percent="12"
              stat-percent-color="text-emerald-500"
              stat-descripiron="Since last month"
              stat-icon-color="bg-emerald-500"
            >
              <template #icon>
                <PresentationChartLineIcon class="w-4 h-4" />
              </template>
            </card-stats>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
