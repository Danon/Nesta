<template>
   <div class="content">
      <div class="md-layout">
         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
            <chart-card
                  :chart-data="dailySalesChart.data"
                  :chart-options="dailySalesChart.options"
                  :chart-type="'Line'"
                  data-background-color="blue">
               <template slot="content">
                  <h4 class="title">
                     <translate>Daily Sales</translate>
                  </h4>
                  <p class="category">
                     <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i> 55%</span>
                     <translate>increase in today sales.</translate>
                  </p>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon>access_time</md-icon>
                     <translate>updated 4 minutes ago</translate>
                  </div>
               </template>
            </chart-card>
         </div>

         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
            <chart-card
                  :chart-data="emailsSubscriptionChart.data"
                  :chart-options="emailsSubscriptionChart.options"
                  :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
                  :chart-type="'Bar'"
                  data-background-color="red">
               <template slot="content">
                  <h4 class="title">
                     <translate>Finished Products</translate>
                  </h4>
                  <p class="category">
                     <translate>Last Order Products Performance</translate>
                  </p>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon>access_time</md-icon>
                     <translate>updated 10 days ago</translate>
                  </div>
               </template>
            </chart-card>
         </div>

         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
            <chart-card
                  :chart-data="dataCompletedTasksChart.data"
                  :chart-options="dataCompletedTasksChart.options"
                  :chart-type="'Line'"
                  data-background-color="green">
               <template slot="content">
                  <h4 class="title">
                     <translate>Completed Orders</translate>
                  </h4>
                  <p class="category">
                     <translate>Last Order Products Performance</translate>
                  </p>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon>access_time</md-icon>
                     <translate>campaign sent 26 minutes ago</translate>
                  </div>
               </template>
            </chart-card>
         </div>

         <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="green">
               <template slot="header">
                  <md-icon>attach_money</md-icon>
               </template>

               <template slot="content">
                  <p class="category">
                     <translate>Income</translate>
                  </p>
                  <h3 class="title">+ $34,245</h3>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon>date_range</md-icon>
                     <translate>Last 24 Hours</translate>
                  </div>
               </template>
            </stats-card>
         </div>

         <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="orange">
               <template slot="header">
                  <md-icon>layers_clear</md-icon>
               </template>

               <template slot="content">
                  <p class="category">
                     <translate>Used steel</translate>
                  </p>
                  <h3 class="title">
                     49/50
                     <small>kg</small>
                  </h3>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon class="text-danger">warning</md-icon>
                     <a href="#">
                        <translate>Get more steel...</translate>
                     </a>
                  </div>
               </template>
            </stats-card>
         </div>

         <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="red">
               <template slot="header">
                  <md-icon>shopping_cart</md-icon>
               </template>

               <template slot="content">
                  <p class="category">
                     <translate>Finished Orders</translate>
                  </p>
                  <h3 class="title">75</h3>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon>local_offer</md-icon>
                     <translate>Loaded from e-mails</translate>
                  </div>
               </template>
            </stats-card>
         </div>

         <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="blue">
               <template slot="header">
                  <md-icon>build</md-icon>
               </template>

               <template slot="content">
                  <p class="category">
                     <translate>Manufactured Products</translate>
                  </p>
                  <h3 class="title">245</h3>
               </template>

               <template slot="footer">
                  <div class="stats">
                     <md-icon>update</md-icon>
                     <translate>Just Updated</translate>
                  </div>
               </template>
            </stats-card>
         </div>

         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
            <md-card>
               <md-card-header data-background-color="orange">
                  <h4 class="title">
                     <translate>Workers Statistics</translate>
                  </h4>
                  <p class="category">
                     <translate>Productiveness of employees on 3rd February, 2019</translate>
                  </p>
               </md-card-header>
               <md-card-content>
                  <workers-table table-header-color="orange"></workers-table>
               </md-card-content>
            </md-card>
         </div>

         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
            <nav-tabs-card>
               <template slot="content">
                  <span class="md-nav-tabs-title">
                     <translate>Orders</translate>:
                  </span>
                  <md-tabs md-sync-route class="md-success" md-alignment="left">
                     <md-tab id="tab-home" md-label="Important" md-icon="bug_report">
                        <nav-tabs-table></nav-tabs-table>
                     </md-tab>

                     <md-tab id="tab-pages" md-label="Moderate" md-icon="code">
                        <nav-tabs-table></nav-tabs-table>
                     </md-tab>

                     <md-tab id="tab-posts" md-label="Not important" md-icon="cloud">
                        <nav-tabs-table></nav-tabs-table>
                     </md-tab>
                  </md-tabs>
               </template>
            </nav-tabs-card>
         </div>
      </div>
   </div>
</template>

<script>
import {ChartCard, NavTabsCard, NavTabsTable, WorkersTable, StatsCard} from "@/components";

export default {
    components: {
        StatsCard,
        ChartCard,
        NavTabsCard,
        NavTabsTable,
        WorkersTable
    },
    data() {
        return {
            dailySalesChart: {
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    series: [[12, 17, 7, 17, 23, 18, 38]]
                },
                options: {
                    lineSmooth: this.$Chartist.Interpolation.cardinal({
                        tension: 0
                    }),
                    low: 0,
                    high: 50, // we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            dataCompletedTasksChart: {
                data: {
                    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
                    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
                },

                options: {
                    lineSmooth: this.$Chartist.Interpolation.cardinal({
                        tension: 0
                    }),
                    low: 0,
                    high: 1000, //  we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            emailsSubscriptionChart: {
                data: {
                    labels: [
                        "Ja",
                        "Fe",
                        "Ma",
                        "Ap",
                        "Mai",
                        "Ju",
                        "Jul",
                        "Au",
                        "Se",
                        "Oc",
                        "No",
                        "De"
                    ],
                    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
                },
                options: {
                    axisX: {
                        showGrid: false
                    },
                    low: 0,
                    high: 1000,
                    chartPadding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                },
                responsiveOptions: [
                    [
                        "screen and (max-width: 640px)",
                        {
                            seriesBarDistance: 5,
                            axisX: {
                                labelInterpolationFnc: function (value) {
                                    return value[0];
                                }
                            }
                        }
                    ]
                ]
            }
        };
    }
};
</script>
