# Generated by Django 4.2.7 on 2024-01-30 16:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_alter_reviews_q1'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reviews',
            name='q10',
        ),
        migrations.RemoveField(
            model_name='reviews',
            name='q7',
        ),
        migrations.RemoveField(
            model_name='reviews',
            name='q8',
        ),
        migrations.RemoveField(
            model_name='reviews',
            name='q9',
        ),
    ]
