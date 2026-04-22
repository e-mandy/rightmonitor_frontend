import sys

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    if filepath.endswith('.css'):
        content = content.replace('.modal', '.rm-modal')
    
    if filepath.endswith('.tsx'):
        content = content.replace('className="modal', 'className="rm-modal')
        content = content.replace('className={`modal', 'className={`rm-modal')
        content = content.replace('id="modal', 'id="rm-modal')

    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('/home/emandy/Data/React/Projects/RightMonitor/src/index.css')
replace_in_file('/home/emandy/Data/React/Projects/RightMonitor/src/components/at_risk/ScoreDetailsCard.tsx')
print("Done")
