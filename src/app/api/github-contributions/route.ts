// src/app/api/github-contributions/route.ts

export async function GET() {
  const username = "chetanchaudhari789";

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const json = await response.json();

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "GitHub API failed", details: json }),
      {
        status: 500,
      }
    );
  }

  const flat = json.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week: any) => week.contributionDays)
    .map((day: any) => ({
      date: day.date,
      count: day.contributionCount,
    }));

  return Response.json({ data: flat });
}
