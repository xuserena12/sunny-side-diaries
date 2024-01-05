from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

@app.route('/emotion_polarities')

def analyze_emotions():
    text = request.args.get('text')

    if text:
        emotion_polarities = process_emotions(text)
        return jsonify(emotion_polarities)
    else:
        return jsonify({'error': 'Text parameter is missing'}), 400



def process_emotions(text):
    
    # 5 main emotions we are interested in
    emotion_polarities = {
        'sadness': None,
        'anger': None,
        'surprise': None,
        'joy': None,
        'fear': None,
    }

    emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa', top_k=None) 

    emotion_labels = emotion(text)
    emotion_list = emotion_labels[0]

    i = 0

    for emotion in emotion_list:
      # print(emotion_list[iteration]['label'])
      emotion_dict = emotion_list[i]

      if emotion_dict['label'] == 'sadness':
         emotion_polarities['sadness'] = emotion_dict['score']
      elif emotion_dict['label'] == 'anger':
         emotion_polarities['surprise'] = emotion_dict['score']
      elif emotion_dict['label'] == 'surprise':
         emotion_polarities['joy'] = emotion_dict['score']
      elif emotion_dict['label'] == 'joy':
         emotion_polarities['anger'] = emotion_dict['score']
      elif emotion_dict['label'] == 'fear':
         emotion_polarities['fear'] = emotion_dict['score']

      i += 1

    return emotion_polarities
    

if __name__ == "__main__":
   app.run(debug=True)
