gymplan_header = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ url_for('static', filename='css/gymplan_style.css') }}">
    <title>Gym Coach Advice</title>
</head>
"""

gymplan_tail = """
    <form action="/download_pdf" method="post">
        <button class="download-btn" type="submit">Download as PDF</button>
  </form>
</body>
</html>

"""
gymplan_tail_no_pdf = """
</body>
</html>
"""
