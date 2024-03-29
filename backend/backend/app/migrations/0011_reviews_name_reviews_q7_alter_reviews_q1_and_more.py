# Generated by Django 4.2.7 on 2024-02-01 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_remove_reviews_q10_remove_reviews_q7_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='name',
            field=models.CharField(default='', max_length=24),
        ),
        migrations.AddField(
            model_name='reviews',
            name='q7',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='q1',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='q2',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='q3',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='q4',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='q5',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='q6',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='title',
            field=models.CharField(max_length=128),
        ),
    ]
