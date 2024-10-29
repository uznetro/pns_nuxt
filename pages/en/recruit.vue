<script setup>
const messages = [
  {
    title: 'Requirements',
    lead: 'HQ39 (T12) or higher! Players who are active in events like SvS are welcome.',
    caption:
      'Many HQ40+ commanders in the alliance! (Our ASA R5 has 1.7 billion Highest Might)',
    color: 'pink',
  },
  {
    title: 'Our Vision',
    lead: 'We are a group of members who enjoy SvS events',
    caption: 'If you like SvS events, this may be the perfect place for you!',
    color: 'deep-purple-lighten-1',
  },

  {
    title: 'Overview',
    lead: 'We are a multinational Asian alliance',
    caption:
      'Newly formed alliance. There will be challenges, but build a alliance together',
    color: 'pink',
  },
  {
    title: 'Selling Points',
    lead: 'We are the top alliance in S723 in terms! This newer state tends to be easier and less competitive when it comes to events and the arena',
    caption:
      'The leaders are very supportive and always available to help. Many experienced players aim to grow together while adapting to the state',
    color: 'deep-purple-lighten-1',
  },
  {
    title: 'Additional Information',
    lead: 'This state is active and crowded, so resource spots (Gas and Iron) of level 6 or higher are quickly depleted',
    caption:
      'S723 is a relatively new state with a lot of potential for growth, and I look forward to growing together and becoming a top alliance',
    color: 'pink',
  },
  {
    title: 'How to Apply',
    lead: 'Interested in joining? Reach out to melon soda in game',
    caption: 'Alliance Fortress: S:723 X:212 Y:494',
    color: 'deep-purple-lighten-1',
  },
]
</script>

<template>
  <v-app>
    <HeaderEn />

    <v-main>
      <v-container>
        <v-row justify="space-around">
          <v-card width="400">
            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">
                <h2 class="heading">
                  <v-chip size="x-large" color="red" style="font-weight: bold">
                    Alliance Recruitment. Join ASA in S723
                  </v-chip>
                </h2>
              </div>

              <v-timeline density="compact" align="start">
                <v-timeline-item
                  v-for="message in messages"
                  :key="message.caption"
                  :dot-color="message.color"
                  size="x-small"
                >
                  <div class="mb-4 message-body">
                    <div class="font-weight-normal">
                      <strong>{{ message.title }}</strong>
                    </div>
                    <div class="lead">{{ message.lead }}</div>
                    <div class="caption">{{ message.caption }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<style scoped>
.heading {
  color: #444645;
}
.v-timeline-item__body {
  font-size: 13px;
}

.lead {
  margin: 7px 0;
  border-bottom: 1px solid #d1d1d1;
  padding-bottom: 7px;
}
.message-body {
  font-size: 14px;
}
</style>
