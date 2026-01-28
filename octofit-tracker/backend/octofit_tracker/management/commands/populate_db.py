from django.core.management.base import BaseCommand
from django.conf import settings

from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete all data from models
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create test users (super heroes)
        users = [
            User(name="Superman", email="superman@dc.com", team="DC"),
            User(name="Batman", email="batman@dc.com", team="DC"),
            User(name="Wonder Woman", email="wonderwoman@dc.com", team="DC"),
            User(name="Iron Man", email="ironman@marvel.com", team="Marvel"),
            User(name="Captain America", email="cap@marvel.com", team="Marvel"),
            User(name="Black Widow", email="widow@marvel.com", team="Marvel"),
        ]
        User.objects.bulk_create(users)

        # Create teams
        teams = [
            Team(name="Marvel", members=["Iron Man", "Captain America", "Black Widow"]),
            Team(name="DC", members=["Superman", "Batman", "Wonder Woman"]),
        ]
        Team.objects.bulk_create(teams)

        # Create activities
        activities = [
            Activity(user="Superman", activity="Flying", duration=120),
            Activity(user="Batman", activity="Martial Arts", duration=90),
            Activity(user="Iron Man", activity="Flight Suit Training", duration=100),
        ]
        Activity.objects.bulk_create(activities)

        # Create leaderboard
        leaderboard = [
            Leaderboard(team="Marvel", points=250),
            Leaderboard(team="DC", points=220),
        ]
        Leaderboard.objects.bulk_create(leaderboard)

        # Create workouts
        workouts = [
            Workout(user="Wonder Woman", workout="Strength", reps=50),
            Workout(user="Captain America", workout="Endurance", reps=40),
        ]
        Workout.objects.bulk_create(workouts)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
